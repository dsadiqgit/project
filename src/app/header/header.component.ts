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

  public goToHome() {
    window.location.href = '/';
  }

  public goToWork() {
    const nav = document.getElementById('nav') as HTMLElement;
    const hamburger = document.getElementById('hamburger') as HTMLElement;
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
    window.location.href = '/#portfolio-strip';
    console.log(this.showMenu);
  }

  public goToContact() {
    window.location.href = '/contact';
  }
}
