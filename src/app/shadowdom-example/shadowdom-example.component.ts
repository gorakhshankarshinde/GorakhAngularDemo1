import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom-example',
  template: `<h1>Shadow dom example <h1> <p>Welcome</p>`, // Here we defined inline html template code.
  styles:['p{ color:red}'], // Here we have defined inline style which will work for shadow dom container only.
  encapsulation: ViewEncapsulation.ShadowDom // Here we used encapsulation metadata property of @Component decorator function to achieve shadow-DOM
})
export class ShadowdomExampleComponent {
  title = "Shadow Dom Demo";
}
