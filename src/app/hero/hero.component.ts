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
      var image = $('#js-hero img');
      var imageDiv = $('#js-hero');
      image.css({
        width: 100 - scroll / 2 + '%',
        top: -300 + scroll * 2 + 'px',
      });
      imageDiv.css({
        top: 600 + scroll / 2 + 'px',
      });
      if (image.width() <= 400) {
        image.css({
          width: 400,
          top: -60,
        });
        imageDiv.css({
          top: 670,
        });
      }
      console.log();
    });
  }
}
function scale(arg0: number) {
  throw new Error('Function not implemented.');
}
