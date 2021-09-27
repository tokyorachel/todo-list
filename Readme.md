# Todo / Task List Project

![todo-optimized](https://user-images.githubusercontent.com/42755840/134940180-b0287306-cc0c-4bf4-998c-8288ce4c5aa0.gif)

## Running the project

`nvm use` to manage node versions.

`npm i` will install dependencies.

`npm run api` to start a separate instance of the `todos-json-server` api at [localhost:3001](http://localhost:3001/).

`npm start` to run a local dev instance of the UI with HMR.

`npm start:all` to run the UI and the api concurrently.

`npm build` to create a bundle.

## Notes on theming

The time expectation for development of this app was 1-2 hours. However, the designer created many custom elements that are not easily themable in a way that is reliably cross-browser compatible and where accessibility is equal to or better than using native html elements:

- checkboxes
- dropdown menu
- context menu for each task item
- progress bar

To do these accurately to the Figma and without relying heavily on 3rd party libraries, it would take considerably longer to do these accurate to the design. In a real world scenario, this would need to be communicated with all stakeholders, including the design team, so that decisions could be make about how to proceed.

I have prioritised adhering to the time constraint. I have used native HTML elements where appropriate and focused on functionality in order to have a working prototype quickly.

## State Management

I decided to try the experimental library, [Recoil](https://recoiljs.org/), for this project.
