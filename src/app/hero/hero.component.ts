import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private window: Window) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    const introText = document.getElementById('intro') as HTMLElement;

    if (this.isInViewport(introText)) {
      introText.classList.add('fade-in');
    }

    setInterval(function () {
      const lgScreen = window.matchMedia('(min-width: 768px)');
      window.matchMedia('(max-width: 767px)');
    }, 1);

    $(window).scroll(function () {
      var lgScreen = window.matchMedia('(min-width: 768px)');
      var smScreen = window.matchMedia('(max-width: 767px)');
      var scroll = $(window).scrollTop();
      var mac = $('#mac');
      var imageDiv = $('#js-hero');
      var macDiv = $('#mac-div');
      var mouse = $('#mouse');

      if (smScreen.matches) {
        imageDiv.addClass('mob');
        macDiv.removeClass('active');
      }

      if (lgScreen.matches) {
        imageDiv.removeClass('mob');

        mac.css({
          width: 100 - scroll / 2 + '%',
          top: -300 + scroll * 2 + 'px',
          opacity: 0.01 + scroll / 130,
        });
        imageDiv.css({
          top: 600 + scroll / 2 + 'px',
        });
        macDiv.css({
          top: 0 + scroll / 1.8 + 'px',
        });

        if (mac.width() <= 400) {
          mac.css({
            width: 400,
            top: -57,
          });
          imageDiv.css({
            top: 670,
          });
        }

        if (mac.width() <= 519) {
          macDiv.addClass('active');
          mouse.addClass('d-none');
          macDiv.css({
            top: 67,
          });
        }
        if (mac.width() >= 520) {
          macDiv.removeClass('active');
          mouse.removeClass('d-none');
        }
      }
    });
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
