import { Component, HostListener, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../../core/translation/translation.service';
import { EmailService } from '../../../core/services/email.service';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-contact-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss',
})
export class ContactModal {
  protected t = inject(TranslationService).t;
  protected emailService = inject(EmailService);
  private fb = inject(FormBuilder);
  private analytics = inject(AnalyticsService);

  open = input.required<boolean>();
  closed = output<void>();

  protected form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }

  close(): void {
    this.closed.emit();
    this.emailService.reset();
    this.form.reset();
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    await this.emailService.send(this.form.getRawValue());

    if (this.emailService.status() === 'success') {
      this.analytics.trackEvent('contact_form_submit');
    }
  }
}
