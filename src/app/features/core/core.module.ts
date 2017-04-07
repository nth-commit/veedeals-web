import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeedealsApiModule } from '../../../_lib/veedeals-api/veedeals-api.module';

@NgModule({
  imports: [
    CommonModule,

    VeedealsApiModule.forRoot('http://localhost:5000')
  ],
  declarations: []
})
export class CoreModule { }
