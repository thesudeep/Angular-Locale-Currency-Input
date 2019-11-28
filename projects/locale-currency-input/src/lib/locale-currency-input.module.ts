import { NgModule, APP_INITIALIZER, LOCALE_ID, } from '@angular/core';
import { LocaleCurrencyInputDirective } from './locale-currency-input.directive';

@NgModule({
  declarations: [
    LocaleCurrencyInputDirective
  ],
  exports: [LocaleCurrencyInputDirective]

})
export class LocaleCurrencyInputModule { }



