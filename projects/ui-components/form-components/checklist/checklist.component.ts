import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'uic-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  @HostBinding('class.uic-checklist')
  hostClass = true;
}
