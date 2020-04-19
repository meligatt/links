import * as React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  border: 1px solid orange;
`;

interface MyProps {
  children?: React.ReactNode;
}

export const PageHeader: React.FunctionComponent = (
  props: React.PropsWithChildren<MyProps>
): JSX.Element => (
  <HeaderStyled>
    <div>header goes here...</div>
    {props.children}
  </HeaderStyled>
);
