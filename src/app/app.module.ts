import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// Import the components
import { AppComponent } from './app.component';

// Insert all the components you want to create as custom Elements into this array
const components = [
  AppComponent,

];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: components
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      
      //[Component name, 'selector name']
      [AppComponent, 'app-comp']
      
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

}
