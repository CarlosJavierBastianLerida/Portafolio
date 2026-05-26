import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected t = inject(TranslationService).t;
  protected year = new Date().getFullYear();
}
