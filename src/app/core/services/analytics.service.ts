import { Injectable } from '@angular/core';
import { inject as injectVercelAnalytics, track } from '@vercel/analytics';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private started = false;

  init(): void {
    if (this.started) return;
    this.started = true;
    injectVercelAnalytics();
  }

  trackEvent(name: string, props?: Record<string, string | number | boolean | null>): void {
    track(name, props);
  }
}
