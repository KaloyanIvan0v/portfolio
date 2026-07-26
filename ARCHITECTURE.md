# Architektur & Einarbeitung

Kurzer Leitfaden, um sich im Projekt zurechtzufinden. Für Setup/Scripts siehe
`README.md`.

## Überblick

Einseitiges Portfolio (Angular 22, Standalone Components, zweisprachig
DE/EN). Kein Backend – das Kontaktformular postet direkt an Formspree.

```
main.ts  →  AppComponent  (Header + <router-outlet> + Footer)
                              │
              ┌───────────────┴────────────────┐
        route ''                        route 'imprint' / 'privacy-policy'
        MainContentComponent                  (statische Rechtstexte)
              │
        stapelt die Sektionen:
        Hero → AboutMe → MySkills → Portfolio → Feedback → Contact
              (+ MobileMenu als Overlay)
```

## Verzeichnisstruktur

```
src/
├── index.html                     # <head>, Meta-/OG-Tags, Favicon
├── styles.scss                    # globale Styles (einmalig geladen)
├── main.ts                        # Bootstrap
└── app/
    ├── app.component.*            # Grundgerüst, startet LanguageService + AOS
    ├── app.config.ts              # Provider (Router, HttpClient, i18n)
    ├── app.routes.ts              # Routen
    ├── <sektion>/                 # je eine Sektion (hero-section, about-me, …)
    └── shared/
        ├── components/            # wiederverwendbar (header, footer, form, …)
        ├── services/              # State & Logik (siehe unten)
        ├── models/                # Interfaces (Project, Skill, Testimonial)
        ├── data/                  # statische Inhaltsdaten (Projekte, Bilder)
        └── scss/                  # _variables.scss (Tokens/Mixins) + global.scss
```

## Die drei Konzepte, die überall wiederkehren

### 1. Standalone Components
Es gibt kein zentrales `NgModule`; seit Angular 19 ist `standalone` der
Default und wird nicht mehr hingeschrieben. Jede Komponente deklariert ihre
eigenen `imports: [...]`. Faustregeln:
- nutzt das Template `| translate` → `TranslatePipe` importieren
- nutzt es `routerLink` → `RouterLink` importieren
- nutzt es `@if` / `@for` → **kein** Import nötig (eingebauter Control-Flow)

### 2. Internationalisierung (i18n)
Kein Text steht fest im HTML, sondern als Key:

```html
{{ "hero.role" | translate }}
```

Der Wert liegt in `src/assets/i18n/en.json` bzw. `de.json`. **Text ändern =
JSON ändern**, nicht das Template. Geladen werden die Dateien über
`TranslationLoader` (HTTP), verdrahtet in `app.config.ts` über
`provideTranslateService({ fallbackLang: 'en', loader: … })`.

### 3. Services als "Single Source of Truth"
State lebt in Services, Komponenten injizieren sie mit `inject()` und
*reagieren* nur – sie halten keinen eigenen Zustand.

| Service | Verantwortung |
|---|---|
| `LanguageService` | aktuelle Sprache: `translate.use()`, `localStorage`, `<html lang>`, `currentLanguage$` |
| `MenuService` | Sichtbarkeit des Mobile-Menüs (Angular Signal), Scroll-Lock und Fokus-Rückgabe an den Öffner |
| `TranslationLoader` | lädt die i18n-JSON-Dateien per HTTP |

## Datenfluss am Beispiel: Sprachwechsel

Diese eine Kette zu verstehen erklärt ~80 % der App:

```
language-switch.component.html   Klick auf den Toggle
  → language-switch.component.ts   toggleLanguage()
  → language.service.ts            changeLanguage()
                                     ├─ translate.use(lang)      → Pipes aktualisieren
                                     ├─ localStorage             → merkt die Wahl
                                     ├─ document.lang            → SEO/A11y
                                     └─ currentLanguage$.next()  → Abonnenten
  → header / mobile-menu           (currentLanguage$ | async)   reagieren
  → alle Templates                 {{ "key" | translate }}      Text ändert sich
```

## Wo finde ich was?

| Ich will ändern … | … dann hier |
|---|---|
| einen sichtbaren Text | `src/assets/i18n/{en,de}.json` |
| Farben / Schrift | `src/app/shared/scss/_variables.scss` |
| globale Button-/Utility-Klassen | `src/app/shared/scss/global.scss` |
| die Projektliste | `src/app/shared/data/projects.ts` |
| die Skill-Icons | `src/app/my-skills/skills-grid/skills-grid.component.ts` |
| die Routen | `src/app/app.routes.ts` |

## Styling-Konventionen

- **Design-Tokens & Mixins**: `_variables.scss`, überall via
  `@use "…/variables" as *;` eingebunden (erzeugt selbst kein CSS).
- **Globale Klassen** (`.btn-green`, `.d-flex`, `.breathing-size` …) leben in
  `global.scss` und werden einmalig über `styles.scss` geladen – in
  Komponenten also **nicht** erneut importieren.
- Responsives Verhalten gehört in CSS-Media-Queries, nicht in TS/Resize-Listener.

## Verifikation

```bash
npm start          # Dev-Server auf http://localhost:4200
npm run build      # Production-Build
npm test           # Unit-Tests (Karma/Jasmine, öffnet Chrome im Watch-Modus)
npx ng test --watch=false --browsers=ChromeHeadless   # einmaliger Durchlauf
npx ng lint        # ESLint inkl. Template-A11y-Regeln
```

Gemeinsame Test-Provider (Translate/Router/HttpClient) liegen in
`src/testing/common-testing.ts` und werden von den Specs importiert.

## Externe Abhängigkeiten

- **@ngx-translate** – i18n
- **AOS** – Scroll-Animationen (in `AppComponent.ngOnInit` initialisiert;
  Markup nutzt `data-aos="…"`-Attribute)
- **Formspree** – nimmt die Kontaktformular-Posts entgegen (Endpoint in
  `form.component.ts`)

## Change Detection

Angular 22 verwendet standardmäßig `OnPush`. Beim Upgrade hat die Migration
jede Komponente explizit auf `ChangeDetectionStrategy.Eager` gesetzt und
`provideZoneChangeDetection()` in `main.ts` ergänzt, um das bisherige
Verhalten zu erhalten. Beides ist Übergangszustand: Solange Slider-Index,
Formular-Feedback und aktiver Navigationspunkt einfache Felder statt Signals
sind, würden Timer- und Subscription-getriebene Updates unter `OnPush` die
View nicht mehr erreichen. Die ESLint-Regel
`prefer-on-push-component-change-detection` steht deshalb auf `warn`.
