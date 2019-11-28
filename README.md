# Angular Locale Currency

This repos is creating a library for angular currency input and also it is showing to use the library

# Library - LocaleCurrencyInputDirective

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

  - In this demo, I've also used translation services to get the locale. If localeId is passed then the currency number format show based on the locale otherwise it get the localeId from browser language. You can also use chrome plugin to set the locale and test in different language. Here is the chrome plugin to switch the local- https://chrome.google.com/webstore/detail/locale-switcher/kngfjpghaokedippaapkfihdlmmlafcc
  
- For more details, the demo is inside src.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

