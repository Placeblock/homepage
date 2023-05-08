import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  collapsed: boolean = true;
  @HostBinding('class.collapsed') get collapsedClass() {
    return this.collapsed;
  }
}
