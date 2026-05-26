import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [AnimateOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected t = inject(TranslationService).t;
}
