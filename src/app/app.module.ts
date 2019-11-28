import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { LocaleCurrencyInputModule} from 'locale-currency-input';

/**
 * if no parameter it takes the language from browser
 */
export const getNavigatorLanguage = (lang = '') =>
                    lang ? lang :
                    (navigator.languages && navigator.languages.length) ?
                      navigator.languages[0].split('-')[0] :
                      navigator.language.split('-')[0] || 'en';

export const lang = getNavigatorLanguage();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    LocaleCurrencyInputModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: lang
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (translateService) => {
        return () => {
          return import(
            `@angular/common/locales/${lang}.js`
            ).then(module => {
              registerLocaleData(module.default);
              translateService.use(lang);
              translateService.setDefaultLang(lang);
            });
        };
      },
      deps: [TranslateService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



