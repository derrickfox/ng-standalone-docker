import { Component } from '@angular/core';
import { Example2Component } from '../example2/example2.component'; // Update the import path to the correct location of the Example2Component.

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [Example2Component],
  template: `
    <h1>Example 1 Component</h1>
    <app-example2></app-example2>
  `,
  styles: []
})
export class Example1Component {}