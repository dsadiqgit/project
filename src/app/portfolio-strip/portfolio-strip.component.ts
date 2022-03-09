import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-strip',
  templateUrl: './portfolio-strip.component.html',
  styleUrls: ['./portfolio-strip.component.scss']
})
export class PortfolioStripComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public seeMore() {
    alert('smell');
  }

}
