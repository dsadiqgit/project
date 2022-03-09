import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dami',
  templateUrl: './dami.component.html',
  styleUrls: ['./dami.component.scss']
})
export class DamiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public switchName() {
    console.log('test');
  }

}
