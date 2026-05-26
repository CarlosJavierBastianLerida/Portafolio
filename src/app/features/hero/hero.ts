import { Component, effect, inject, OnDestroy, signal } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnDestroy {
  private i18n = inject(TranslationService);
  protected t = this.i18n.t;

  protected typedRole = signal('');
  protected cursorVisible = signal(true);

  private typingId: ReturnType<typeof setInterval> | null = null;
  private cursorId: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      const role = this.t().hero.role;
      this.startTyping(role);
    });

    this.cursorId = setInterval(() => {
      this.cursorVisible.update((v) => !v);
    }, 530);
  }

  private startTyping(text: string): void {
    if (this.typingId) clearInterval(this.typingId);
    this.typedRole.set('');
    let i = 0;
    this.typingId = setInterval(() => {
      if (i < text.length) {
        this.typedRole.update((t) => t + text[i]);
        i++;
      } else {
        clearInterval(this.typingId!);
      }
    }, 55);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    if (this.typingId) clearInterval(this.typingId);
    clearInterval(this.cursorId);
  }
}
