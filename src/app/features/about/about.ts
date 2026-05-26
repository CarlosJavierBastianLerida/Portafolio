import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected t = inject(TranslationService).t;
}
