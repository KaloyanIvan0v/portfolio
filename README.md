# Portfolio — Kaloyan Ivanov

Persönliche Portfolio-Website: einseitige Angular-Anwendung, zweisprachig
(Deutsch/Englisch), ohne Backend.

**Live:** [kaloyanivanov.de](https://kaloyanivanov.de/)

## Stack

| | |
|---|---|
| Framework | Angular 22, ausschließlich Standalone Components |
| Sprache | TypeScript 6 (strict, inkl. `strictTemplates`) |
| Styling | SCSS mit zentralen Design-Tokens, keine UI-Bibliothek |
| i18n | `@ngx-translate` mit eigenem HTTP-Loader |
| Animationen | AOS (scroll-getriggert) |
| Tests | Karma + Jasmine |
| Kontaktformular | Formspree (kein eigener Server) |

## Schnellstart

```bash
npm install
npm start          # Dev-Server auf http://localhost:4200
```

## Scripts

| Befehl | Zweck |
|---|---|
| `npm start` | Dev-Server mit Hot Reload |
| `npm run build` | Production-Build nach `dist/portfolio` |
| `npm test` | Unit-Tests (öffnet Chrome, Watch-Modus) |
| `npm run lint` | ESLint inkl. Template-Accessibility-Regeln |

Für CI oder einen einmaligen Durchlauf:

```bash
npx ng test --watch=false --browsers=ChromeHeadless
```

## Aufbau

Die Startseite (Route `''`) stapelt die Sektionen Hero, Über mich, Skills,
Portfolio, Feedback und Kontakt. Daneben gibt es zwei statische Routen für
Impressum und Datenschutzerklärung.

Eine ausführliche Beschreibung der Architektur, der Datenflüsse und der
Konventionen steht in **[ARCHITECTURE.md](ARCHITECTURE.md)**.

## Inhalte ändern

| Ich will ändern … | … dann hier |
|---|---|
| einen sichtbaren Text | `src/assets/i18n/{en,de}.json` |
| die Projektliste | `src/app/shared/data/projects.ts` |
| die Testimonials | `src/assets/i18n/*.json` + `src/app/shared/data/testimonials.ts` |
| Farben / Mixins | `src/app/shared/scss/_variables.scss` |

Kein sichtbarer Text steht fest im HTML — Templates enthalten nur i18n-Keys.
Beide Sprachdateien müssen denselben Satz an Keys haben.

## Bekannte offene Punkte

- Alle Komponenten laufen auf `ChangeDetectionStrategy.Eager` statt auf dem
  Angular-22-Default `OnPush` — die Umstellung setzt Signals für den
  restlichen mutierbaren Komponenten-State voraus.
- Die Testsuite besteht überwiegend aus Smoke-Tests; echte Verhaltenstests
  gibt es nur für Slider, Formularvalidierung, `LanguageService` und
  `MenuService`.
- Keine CI-Pipeline, kein E2E-Test.
