import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'uic-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @HostBinding('class.uic-dropdown')
  hostClass = true;

}
