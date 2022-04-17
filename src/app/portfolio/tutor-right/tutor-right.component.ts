import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-right',
  templateUrl: './tutor-right.component.html',
  styleUrls: ['./tutor-right.component.scss'],
})
export class TutorRightComponent implements OnInit {
  constructor(private window: Window) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    var lgScreen = window.matchMedia('(min-width: 768px)');
    var smScreen = window.matchMedia('(max-width: 767px)');

    if (lgScreen.matches) {
      var portfolioInfo = document.getElementById(
        'portfolio-info'
      ) as HTMLElement;
      if (window.scrollY >= 240) {
        portfolioInfo.classList.add('fixed');
      }
      if (window.scrollY < 230) {
        portfolioInfo.classList.remove('fixed');
      }
    }

    if (smScreen.matches) {
      var portfolioInfo = document.getElementById(
        'portfolio-info'
      ) as HTMLElement;
      portfolioInfo.classList.remove('fixed');
    }
  }

  public test() {
    console.log(window.scrollY);
  }
}
