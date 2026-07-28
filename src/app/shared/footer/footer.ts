import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { LegalModal } from '../legal-modal/legal-modal';

type LegalDocKey = 'privacy' | 'cookies' | 'notice';

@Component({
  selector: 'app-footer',
  imports: [LegalModal],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected t = inject(TranslationService).t;
  protected year = new Date().getFullYear();

  private activeDocKey = signal<LegalDocKey | null>(null);
  protected activeDoc = computed(() => {
    const key = this.activeDocKey();
    return key ? this.t().legal[key] : null;
  });

  openDoc(key: LegalDocKey): void {
    this.activeDocKey.set(key);
  }

  closeDoc(): void {
    this.activeDocKey.set(null);
  }
}
