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
    const usp = document.getElementById('usp-div') as HTMLElement;
    if (window.pageYOffset >= 750 ) {
      usp.classList.add('active');
    }
    else {
      usp.classList.remove('active');
    }
  }

}
