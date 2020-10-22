import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddFormComponent} from "./add-form/add-form.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'add',
    component: AddFormComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
