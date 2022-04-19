import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu() {
    const nav = document.getElementById('nav') as HTMLElement;
    const hamburger = document.getElementById('hamburger') as HTMLElement;
    const html = document.getElementById('dsadiq') as HTMLElement;
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
    this.showMenu = !this.showMenu;

    document.body.classList.toggle('no-overflow');
    html.classList.toggle('no-overflow');
  }

  public goToWork() {
    !this.showMenu;
    window.location.href = '#portfolio-strip';
  }

  public goToContact() {
    !this.showMenu;
    window.location.href = '/contact';
  }
}
