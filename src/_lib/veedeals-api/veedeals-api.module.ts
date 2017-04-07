import { NgModule, ModuleWithProviders, Provider, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Veedeals from './veedeals-api.swagger';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class VeedealsApiModule {
  static forRoot(baseUrl: string): ModuleWithProviders {
    return {
      ngModule: VeedealsApiModule,
      providers: <Provider[]>[
        Veedeals.CustomersClient,
        Veedeals.DealsClient,
        Veedeals.MerchantsClient,
        Veedeals.PurchasesClient,
        Veedeals.VouchersClient,

        <ValueProvider>{ provide: Veedeals.API_BASE_URL, useValue: baseUrl }
      ]
    }
  }
}
