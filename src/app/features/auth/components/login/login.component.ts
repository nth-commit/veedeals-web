import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';

import { AuthActions } from './../../../../state/auth/auth.actions';
import { AppState } from '../../../../abstractions/state'
import { Action,Store } from '@ngrx/store';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() onLogin = new EventEmitter<Action>()

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authActions: AuthActions,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    if (this.form.valid) {
      this.onLogin.emit(this.authActions.login(
        this.form.value['email'],
        this.form.value['password']
      ));
    }
  }
}
