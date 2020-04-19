import * as React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  border: 1px solid green;
`;

interface MyProps {
  children?: React.ReactNode;
}

export const PageFooter: React.FunctionComponent = (
  props: React.PropsWithChildren<MyProps>
): JSX.Element => (
  <FooterStyled>
    <div>footer goes here...</div>
    {props.children}
  </FooterStyled>
);
