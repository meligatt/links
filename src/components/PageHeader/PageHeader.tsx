import * as React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props): string => props.theme.background_color};
`;

const UserNameStyled = styled.h1`
  color: black;
`;

type PageHeaderProps = {
  userName: string;
  children?: React.ReactNode;
};

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  userName,
  children,
}): JSX.Element => (
  <HeaderStyled>
    {children && children}
    {<UserNameStyled>@{userName}</UserNameStyled>}
  </HeaderStyled>
);
