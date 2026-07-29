import { Component, inject } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Education } from './features/education/education';
import { Experience } from './features/experience/experience';
import { Contact } from './features/contact/contact';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, About, Projects, Skills, Education, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    inject(AnalyticsService).init();
  }
}
