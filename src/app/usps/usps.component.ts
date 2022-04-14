import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-usps',
  templateUrl: './usps.component.html',
  styleUrls: ['./usps.component.scss']
})
export class UspsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    const topFacts = document.getElementById('top') as HTMLElement;
    if (window.pageYOffset >= 750 ) {
      topFacts.classList.add('active');
    }
    else {
      topFacts.classList.remove('active');
    }
  }

}
