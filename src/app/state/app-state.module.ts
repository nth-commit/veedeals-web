import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { compose } from '@ngrx/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { authReducer, AuthActions } from './auth';

@NgModule({
    imports: [
        StoreModule.provideStore(
            compose(
                localStorageSync(['auth'], true),
                combineReducers)
            ({
                router: routerReducer,
                auth: authReducer
            }))
    ],
    providers: [
        AuthActions
    ]
})
export class AppStateModule { }

