import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [AnimateOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected t = inject(TranslationService).t;
}
