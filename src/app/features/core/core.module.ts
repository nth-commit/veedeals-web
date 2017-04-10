import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdMenuModule } from '@angular/material';

import { VeedealsApiModule } from '../../../_lib/veedeals-api/veedeals-api.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LocationService } from './services/location.service';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MdToolbarModule,
    MdMenuModule,

    VeedealsApiModule.forRoot('http://localhost:5000')
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [
    LocationService
  ]
})
export class CoreModule { }
