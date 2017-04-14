import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';

import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
