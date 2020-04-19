import * as React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Avatar } from "../../components/Avatar/Avatar";
import styled from "styled-components";

export const MainStyled = styled.main`
  border: 1px solid red;
`;

export const Main: React.FunctionComponent = (): JSX.Element => (
  <>
    <PageHeader>
      <Avatar />
    </PageHeader>
    <MainStyled>list of links goes here</MainStyled>
    <PageFooter />
  </>
);
