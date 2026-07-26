import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  afterEach(() => {
    document.documentElement.classList.remove('menu-open');
  });

  it('should start closed', () => {
    expect(service.mobileMenuVisible()).toBeFalse();
  });

  it('should lock the page while the menu is open', () => {
    service.openMobileMenu();
    TestBed.flushEffects();
    expect(document.documentElement.classList.contains('menu-open')).toBeTrue();

    service.closeMobileMenu();
    TestBed.flushEffects();
    expect(document.documentElement.classList.contains('menu-open')).toBeFalse();
  });

  it('should return focus to the element that opened it', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);

    service.openMobileMenu(trigger);
    service.closeMobileMenu();

    expect(document.activeElement).toBe(trigger);
    trigger.remove();
  });

  it('should ignore a close while already closed', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    service.openMobileMenu(trigger);
    service.closeMobileMenu();

    trigger.blur();
    service.closeMobileMenu();

    expect(document.activeElement).not.toBe(trigger);
    trigger.remove();
  });
});
