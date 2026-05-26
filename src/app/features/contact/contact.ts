import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [AnimateOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected t = inject(TranslationService).t;
}
