import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "./containers/Main";

export class App {
  private _appName = "Awesome Link App!";

  constructor() {
    this.render();
  }

  private render(): void {
    ReactDOM.render(
      React.createElement(Main, { app: this }),
      document.getElementById("app")
    );
  }

  public get appName(): string {
    return this._appName;
  }
}

new App();
