import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    const techDiv = document.getElementById('tech-slider') as HTMLElement;
    const techInfo = document.getElementById('tech-info') as HTMLElement;

    if (this.isInViewport(techDiv)) {
      techDiv.classList.add('slide-left');
    }
    if (this.isInViewport(techInfo)) {
      techInfo.classList.add('slide-right');
    }
  }

  slides = [
    {
      img: [
        '../../assets/images/icon/bootstrap.png',
        '../../assets/images/icon/sass.png',
        '../../assets/images/icon/html-5.png',
        '../../assets/images/icon/adobe-photoshop.png',
        '../../assets/images/icon/gulp.png',
        '../../assets/images/icon/npm.png',
        '../../assets/images/icon/typescript.png',
        '../../assets/images/icon/nodejs.png',
        '../../assets/images/icon/wordpress.png',
      ],
    },
    {
      img: [
        '../../assets/images/icon/css3.png',
        '../../assets/images/icon/jquery.png',
        '../../assets/images/icon/jira.png',
        '../../assets/images/icon/github.png',
        '../../assets/images/icon/mysql.png',
        '../../assets/images/icon/shopify.png',
        '../../assets/images/icon/php.png',
        '../../assets/images/icon/slack.png',
        '../../assets/images/icon/ionic.png',
      ],
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
