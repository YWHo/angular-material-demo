import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-demo';
  isChecked = true;

  onChange($event) {
    console.log($event)
  }

  colors = [
    { id:1, name: 'Red' },
    { id:2, name: 'Green' },
    { id:3, name: 'Blue' }
  ]
  color = 2
}
