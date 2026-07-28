import { Component, HostListener, input, output } from '@angular/core';
import { LegalDoc } from '../../core/translation/translations';

@Component({
  selector: 'app-legal-modal',
  imports: [],
  templateUrl: './legal-modal.html',
  styleUrl: './legal-modal.scss',
})
export class LegalModal {
  doc = input<LegalDoc | null>(null);
  closeLabel = input<string>('Close');
  closed = output<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.doc()) this.closed.emit();
  }
}
