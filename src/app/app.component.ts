import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  links = [
    { name: 'Upload page', path: '/upload' },
    { name: 'History page', path: '/history' },
  ];
  activeLink = this.links[0].name;
  constructor(private router: Router) {
    this.router.navigate([this.links[0].path]);
  }
  tabClicked(link: any) {
    this.activeLink = link.name;
    this.router.navigate([link.path]);
  }
}
