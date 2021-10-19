import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'uic-split-container',
  templateUrl: './split-container.component.html'
})
export class SplitContainerComponent {
  @HostBinding('class.uic-split-container')
  hostClass = true;
}
