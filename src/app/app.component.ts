import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locale-currency';
  usAmount = 100;
  germanyAmount = 210;

  updateUSAmount(event) {
    this.usAmount = event.target.value;
  }
  updateGermanyAmount(event) {
    this.germanyAmount = event.target.value;
  }
}
