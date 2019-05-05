# Angular Elements Demo
A quick and easy way to get started making Angular Elements without the hassle.

Demo: https://pownthep.github.io/Angular-Elements-Demo/

## 1. Clone Repository
```
git clone https://github.com/pownthep/Angular-Elements-Template.git
```
## 2. Install Dependencies
```
cd Angular-Elements-Template
npm install
```
## 3. Create Components
```
ng generate component custom-element
```
## 4. Register Component As Custom Element
Example of registering component name 'CustomElementComponent' as an element.

**app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// Import the components
import { AppComponent } from './app.component';
import { CustomElementComponent } from './custom-element/custom-element.component'

// Insert all the components you want to create as custom elements into this array
const components = [
  AppComponent,
  //TODO: Add your component e.g.
  CustomElementComponent
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
      //TODO: Add components e.g.
      [CustomElementComponent, 'custom-element']
      
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

}
```
## 5. Build elements
```bash
npm run build:elements
```
If the build is successful, you should see a new folder call 'elements' which has the script and the css file that you can use in any other web development project. 
For example, 
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularElementsTemplate</title>
</head>
<body>
  <custom-element></custom-element>
  <script src="angular-elements.js"></script>
</body>
</html>
```
## 6. Additional Configurations
_Coming soon_
