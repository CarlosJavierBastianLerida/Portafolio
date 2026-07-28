import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-projects',
  imports: [AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected t = inject(TranslationService).t;
  private analytics = inject(AnalyticsService);

  trackGithubClick(project: string): void {
    this.analytics.trackEvent('project_github_click', { project });
  }

  trackDemoClick(project: string): void {
    this.analytics.trackEvent('project_demo_click', { project });
  }
}
