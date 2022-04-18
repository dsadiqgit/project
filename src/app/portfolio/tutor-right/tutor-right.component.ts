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
    var footer = document.getElementById('footer') as HTMLElement;

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

    if (this.isInViewport(footer)) {
      portfolioInfo.classList.remove('fixed');
    }
  }

  public isInViewport(item) {
    var bounding = item.getBoundingClientRect(),
      myElementHeight = item.offsetHeight,
      myElementWidth = item.offsetWidth;

    if (
      bounding.top >= -myElementHeight &&
      bounding.left >= -myElementWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          myElementWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          myElementHeight
    ) {
      return true;
    } else {
      return false;
    }
  }
}
