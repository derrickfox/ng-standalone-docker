import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  standalone: true,
  template: `
    <div>
      <h2>Example 2 Component</h2>
      <p>This is content from the Example 2 component.</p>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
      }
    `
  ]
})
export class Example2Component {}