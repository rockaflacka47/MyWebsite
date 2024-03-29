import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNav: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  flipNav(): void {
    this.showNav = !this.showNav;
  }
}
