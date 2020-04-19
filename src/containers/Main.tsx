import * as React from "react";
import { App } from "../App";
import { Hello } from "../components/Hello";

export interface MainProps {
  app: App;
}

export class Main extends React.Component<MainProps, {}> {
  constructor(props: MainProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <>
        <Hello name={this.props.app.appName} />
      </>
    );
  }
}
