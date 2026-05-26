import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit {
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.classList.add('fade-up');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
  }
}
