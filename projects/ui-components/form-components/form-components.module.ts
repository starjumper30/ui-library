import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ChecklistComponent } from './checklist/checklist.component';



@NgModule({
  declarations: [DropdownComponent, ChecklistComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownComponent, ChecklistComponent]
})
export class FormComponentsModule { }
