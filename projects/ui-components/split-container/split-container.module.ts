import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitContainerComponent } from './split-container.component';



@NgModule({
  declarations: [SplitContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [SplitContainerComponent]
})
export class SplitContainerModule { }
