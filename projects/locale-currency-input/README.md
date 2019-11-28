# Angular Locale Currency

This repos is creating a library for angular currency input

# Directive
use in the html: localeCurrencyInput 

# Module
import in the module - LocaleCurrencyInputModule

The directive can be used in html input to automatically change the input to locale currency.
- Input in any locale currency convert to number inside the component. On focus the user will see to type in number and on focus out the user will see the number in currency format with the support of internalization format and currency symbol

- The selector name of the directive is localeCurrencyInput

- The directive consists of two inputs:
  * currencyCode (default value = 'USD')
  * allowNegative (default value = false)

- For more details , the project is inside projects/locale-currency-input. 

# Demo
- The following steps is required to use this directives:
  - The module need to import
     * import { LocaleCurrencyInputModule} from 'locale-currency-input';
     * imports: [LocaleCurrencyInputModule]

  - Inside the view you need to call localeCurrencyInput and add input. Below is one of the example
  
    <input type="text"
        localeCurrencyInput
        [allowNegative]="false"
        [currencyCode]="'USD'"
        [value]="usAmount"
        (blur)="updateUSAmount($event)" />

  - Inside the component you can get the value by using event like blur or click or any other event. Below is one of the example
      updateUSAmount(event) {
        this.usAmount = event.target.value;
      }

  - You can also used translation services to get the locale. If localeId is passed then the currency number format show based on the locale you had registered. If localeId is not passed then by default it will take from browser language. You can also use chrome plugin to set the locale and test in different language. Here is the chrome plugin to switch the local- https://chrome.google.com/webstore/detail/locale-switcher/kngfjpghaokedippaapkfihdlmmlafcc
  Here is an example how we can used achieve this
  ```javascript
  export const getNavigatorLanguage = (lang = '') =>
                    lang ? lang :
                    (navigator.languages && navigator.languages.length) ?
                      navigator.languages[0].split('-')[0] :
                      navigator.language.split('-')[0] || 'en';


  export const lang = getNavigatorLanguage();

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
    }
```
