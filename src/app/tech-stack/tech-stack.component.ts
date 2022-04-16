import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
    autoplaySpeed: 3000,
  };
}
