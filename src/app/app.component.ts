import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to {{title}}!!</h1>
  <app-shipping></app-shipping>
   `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-cli';
}
