import {Component, HostBinding, Input} from '@angular/core';
import {NavRoute} from './nav-route';

@Component({
  selector: 'uic-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  @HostBinding('class.uic-nav-bar')
  hostClass = true;

  @Input()
  routes: NavRoute[] | undefined;
}
