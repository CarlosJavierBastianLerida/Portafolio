import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-education',
  imports: [AnimateOnScrollDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected t = inject(TranslationService).t;
}
