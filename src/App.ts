import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "./containers/Main/Main";

export class App {
  constructor() {
    this.render();
  }

  private render(): void {
    ReactDOM.render(React.createElement(Main), document.getElementById("app"));
  }
}

new App();
