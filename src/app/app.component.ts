import { Component } from '@angular/core';
import { Example1Component } from './example1/example1.component'; // Assuming the correct path to the Example1Component file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Example1Component],
  template: `
    <div>
      <h1>App Component</h1>
      <app-example1></app-example1>
    </div>
  `,
  styles: []
})
export class AppComponent {}