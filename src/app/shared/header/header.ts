import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private i18n = inject(TranslationService);
  protected t = this.i18n.t;
  protected lang = this.i18n.lang;
  protected scrolled = signal(false);
  protected menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  protected setLang(lang: 'es' | 'en'): void {
    this.i18n.set(lang);
  }

  protected scrollTo(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
