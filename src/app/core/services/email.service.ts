import { Injectable, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export type EmailStatus = 'idle' | 'sending' | 'success' | 'error';

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private _status = signal<EmailStatus>('idle');
  readonly status = this._status.asReadonly();

  async send(payload: EmailPayload): Promise<void> {
    this._status.set('sending');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: payload.name,
          email: payload.email,
          message: payload.message,
          title: 'Portfolio',
        },
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      this._status.set('success');
    } catch (error) {
      console.error('EmailJS send failed:', error);
      this._status.set('error');
    }
  }

  reset(): void {
    this._status.set('idle');
  }
}
