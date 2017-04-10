import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';

import { VeedealsApiModule } from '../../../_lib/veedeals-api/veedeals-api.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MdToolbarModule,

    VeedealsApiModule.forRoot('http://localhost:5000')
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
