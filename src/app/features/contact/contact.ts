import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { ContactModal } from './contact-modal/contact-modal';

@Component({
  selector: 'app-contact',
  imports: [AnimateOnScrollDirective, ContactModal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected t = inject(TranslationService).t;
  protected isModalOpen = signal(false);

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }
}
