import { Injectable, computed, signal } from '@angular/core';
import { Lang, translations } from './translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _lang = signal<Lang>('es');

  readonly lang = this._lang.asReadonly();
  readonly t = computed(() => translations[this._lang()]);

  toggle(): void {
    this._lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  set(lang: Lang): void {
    this._lang.set(lang);
  }
}
