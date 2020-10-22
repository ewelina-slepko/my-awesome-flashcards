import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoDataInfoComponent} from './components/no-data-info/no-data-info.component';
import {AddButtonComponent} from './components/add-button/add-button.component';

@NgModule({
  declarations: [
    NoDataInfoComponent,
    AddButtonComponent,
  ],
  exports: [
    NoDataInfoComponent,
    AddButtonComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
}
