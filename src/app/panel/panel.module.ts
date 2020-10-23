import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PanelRoutingModule} from "./panel-routing.module";
import {MaterialModule} from "../shared/material/material.module";
import { ListComponent } from './dashboard/list/list.component';
import { AddFormComponent } from './add-form/add-form.component';
import {FormsModule} from "@angular/forms";
import { DetailsComponent } from './details/details.component';
import {SharedModule} from "../shared/shared.module";
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [DashboardComponent, ListComponent, AddFormComponent, DetailsComponent, GameComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class PanelModule { }
