import * as React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Avatar } from "../../components/Avatar/Avatar";
import { Link } from "../../components/Link/Link";
import { Accordion } from "../../components/Accordion/Accordion";
import styled from "styled-components";

const MainStyled = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

// TODO: wrap this component with stylecomponent <Theme> to pass the values from request
export const Main: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <PageHeader userName="@ImNoJedi">
        <Avatar src="https://lumiere-a.akamaihd.net/v1/images/5cb3c849d5de240001a05880-image_c6729179.jpeg" />
      </PageHeader>
      <MainStyled>
        <Link
          type="classic"
          href="https://www.starwars.com/databank/ahsoka-tano"
        >
          My Bio
        </Link>

        <Link
          type="classic"
          href="https://www.starwars.com/databank/darth-maul"
        >
          My enemies
        </Link>

        <Accordion label="Shows">
          <Link
            type="shows"
            href="https://www.starwars.com/databank/ahsoka-tano"
          >
            Show details goes here...
          </Link>
          <Link
            type="shows"
            href="https://www.starwars.com/databank/ahsoka-tano"
          >
            Show details goes here...
          </Link>
          <Link
            type="shows"
            href="https://www.starwars.com/databank/ahsoka-tano"
          >
            Show details goes here...
          </Link>
        </Accordion>

        <Accordion label="Music">
          <Accordion
            label="Spotify"
            customHeader={({ toggleVisibility, isVisible }): JSX.Element => {
              return (
                <button onClick={(): void => toggleVisibility(isVisible)}>
                  icon | Spotify | chevron
                </button>
              );
            }}
          >
            <div>Spotify player goes here</div>
          </Accordion>
          <Accordion
            label="Apple"
            customHeader={({ toggleVisibility, isVisible }): JSX.Element => {
              return (
                <button onClick={(): void => toggleVisibility(isVisible)}>
                  icon | Apple | chevron
                </button>
              );
            }}
          >
            <div>Apple player goes here</div>
          </Accordion>
        </Accordion>
      </MainStyled>
      <PageFooter />
    </>
  );
};
