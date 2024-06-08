import { Component } from '@angular/core';
import { Example2Component } from '../example2/example2.component'; // Assuming example2.component.ts is located in the '../example2' folder

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [Example2Component],
  template: `
    <div>
      <h1>Example 1 Component</h1>
      <app-example2></app-example2>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid #000;
        padding: 20px;
        border-radius: 5px;
      }
    `
  ]
})
export class Example1Component {}