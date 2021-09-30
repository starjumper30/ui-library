import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'uic-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {
  @HostBinding('class.uic-data-grid')
  hostClass = true;

}
