import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SplitContainerModule } from 'ui-components/split-container';

import { SplitContainerDemoComponent } from './split-container-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SplitContainerDemoComponent
  }
];

@NgModule({
  declarations: [SplitContainerDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SplitContainerModule,
  ]
})
export class SplitContainerDemoModule { }
