import * as React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoStyled = styled.img`
  width: 85px;
  height: 16px;
`;

type PageFooterProps = {
  children?: React.ReactNode;
};

export const PageFooter: React.FunctionComponent<PageFooterProps> = ({
  children,
}): JSX.Element => (
  <FooterStyled>
    {children && children}
    <LogoStyled alt="LinkTree" src={logo} />
  </FooterStyled>
);
