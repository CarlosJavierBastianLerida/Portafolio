import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected t = inject(TranslationService).t;
}
