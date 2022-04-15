import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private window: Window) {}

  ngOnInit(): void {}

  public contactMe() {
    alert('smell');
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var mac = $('#mac');
      var imageDiv = $('#js-hero');
      var macDiv = $('#mac-div');

      mac.css({
        width: 100 - scroll / 2 + '%',
        top: -300 + scroll * 2 + 'px',
        opacity: 0.01 + scroll / 100,
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
        macDiv.css({
          top: 67,
        });
        imageDiv.css({
          top: 670,
        });
      }

      if (mac.width() <= 519) {
        macDiv.addClass('active');
      }
      if (mac.width() >= 520) {
        macDiv.removeClass('active');
      }
      console.log(mac.width());
    });
  }
}
