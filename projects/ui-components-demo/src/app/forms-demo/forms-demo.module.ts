import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsDemoComponent } from './forms-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FormsDemoComponent
  }
];

@NgModule({
  declarations: [
    FormsDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FormsDemoModule { }
