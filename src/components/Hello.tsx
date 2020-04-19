import * as React from "react";
import styled from "styled-components";

const Greeting = styled.h3`
  border: 1px solid red;
`;

interface HelloProps {
  name: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  public render(): JSX.Element {
    return (
      <>
        <Greeting>testing! {this.props.name}</Greeting>
      </>
    );
  }
}
