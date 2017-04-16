import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { compose } from '@ngrx/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { errorReducer, ErrorActions } from './error';
import { authReducer, AuthActions, AuthEffects } from './auth';

@NgModule({
    imports: [
        StoreModule.provideStore(
            compose(
                localStorageSync(['auth'], true),
                combineReducers)
            ({
                router: routerReducer,
                error: errorReducer,
                auth: authReducer
            })),
        EffectsModule.run(AuthEffects),

        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        AuthActions,
        ErrorActions
    ]
})
export class AppStateModule { }
