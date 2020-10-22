import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PanelRoutingModule} from "./panel-routing.module";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
