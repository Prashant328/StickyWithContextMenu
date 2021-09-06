# StickyNotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## UI library

Angular material used for creating right click context-menu options and draggable sticky.

## Steps to Run Project in dev mode

1. Unzip code file
2. Move inside project folder
3. Run `npm install` to install the dependencies.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Assumptions

1. We have used a plain div to create boxes for Sticky and inside that we have used label and textarea as below-

<div>
  <label></label>
  <textarea></textarea>
</div>

label - To display sticky text in view mode only.
textarea - To make sticky text editable in edit mode only.

## Note - (Shift + Enter) can be used to move to next line while editing in textarea.

2. Object model for Sticky Item
   [{ id: 1, name: 'New Sticky', mode:"view" }]

   id- uniqueId for Sticky
   name- default/editable text for Sticky
   mode- To control mode (view/edit) of Sticky (default mode- view)

3. If inupt textarea field is focused of any Sticky item then on press of enter buton from keybord, edit mode will be changed to view mode.
