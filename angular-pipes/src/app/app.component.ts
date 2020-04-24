import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pipes';

  date = new Date();
  num: number = 100;
  data: string = 'Angular 8.0 is a Component Based Framework';
}
