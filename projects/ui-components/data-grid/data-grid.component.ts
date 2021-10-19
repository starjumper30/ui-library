import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'uic-data-grid',
  templateUrl: './data-grid.component.html'
})
export class DataGridComponent {
  @HostBinding('class.uic-data-grid')
  hostClass = true;

}
