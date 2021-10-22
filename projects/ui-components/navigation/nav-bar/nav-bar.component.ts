import { Component, Input } from '@angular/core';
import { NavRoute } from './nav-route';

@Component({
  selector: 'uic-nav-bar',
  host: { class: 'uic-nav-bar' },
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  @Input()
  routes: NavRoute[] | undefined;
}
