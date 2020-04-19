import * as React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Avatar } from "../../components/Avatar/Avatar";
import { Link } from "../../components/Link/Link";
import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 1rem;
`;
// TODO: wrap this component with stylecomponent <Theme> to pass the values from request
export const Main: React.FunctionComponent = (): JSX.Element => (
  <>
    <PageHeader userName="@ImNoJedi">
      <Avatar src="https://lumiere-a.akamaihd.net/v1/images/5cb3c849d5de240001a05880-image_c6729179.jpeg" />
    </PageHeader>
    <MainStyled>
      {/* TODO: map the link items */}
      <Link
        href="https://www.starwars.com/databank/ahsoka-tano"
        text="My Bio"
      />

      <Link
        href="https://www.starwars.com/databank/ahsoka-tano-biography-gallery"
        text="My old friends"
      />

      <Link
        href="https://www.starwars.com/databank/darth-maul"
        text="My Number one enemy"
      />
    </MainStyled>
    <PageFooter />
  </>
);
