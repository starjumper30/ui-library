import { Component } from '@angular/core';
import { NavRoute } from 'ui-components/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: NavRoute[] = [
    {
      title: 'About',
      path: 'about'
    },
    {
      title: 'Split Container',
      path: 'split-container'
    },
    {
      title: 'Forms',
      path: 'forms'
    },
    {
      title: 'Data Grid',
      path: 'data-grid'
    }
  ];
}
