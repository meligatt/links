import * as React from "react";
import { useState, useEffect } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Avatar } from "../../components/Avatar/Avatar";
import { Link } from "../../components/Link/Link";
import { IconButton } from "../../components/IconButton/IconButton";
import { Accordion } from "../../components/Accordion/Accordion";
import styled from "styled-components";

const MainStyled = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: auto;
  margin: 0 auto;
`;

// TODO: wrap this component with stylecomponent <Theme> to pass the values from request
// TODO: add test to Main container, mocking fetch api.
export const Main: React.FunctionComponent = (): JSX.Element => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {data && (
        <PageHeader userName={data.details.username}>
          <Avatar src={data.details.avatarURL} />
        </PageHeader>
      )}
      <MainStyled>
        {data &&
          data.links.classic.map(({ text, url, type }) => (
            <Link key={url} type={type} href={url}>
              {text}
            </Link>
          ))}

        {data && (
          <Accordion label="Shows">
            {data.links.shows.map(({ text, url, date }) => (
              <Link key={url} href={url} type="shows">
                {/* TODO: this can be a component */}
                <div>
                  <div>{date}</div>
                  <div>{text}</div>
                </div>
              </Link>
            ))}
          </Accordion>
        )}

        {data && (
          <Accordion label="Music">
            {data.links.music.map(({ text, url }) => (
              <Accordion
                key={text}
                label={text}
                customHeader={({
                  toggleVisibility,
                  isVisible,
                }): JSX.Element => {
                  return (
                    <IconButton
                      onClick={(): void => toggleVisibility(isVisible)}
                    >
                      🎵{text}
                    </IconButton>
                  );
                }}
              >
                {/* TODO: this can be a component */}
                <iframe
                  src={url}
                  width="100%"
                  height="100"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                ></iframe>
              </Accordion>
            ))}
          </Accordion>
        )}
      </MainStyled>
      <PageFooter />
    </>
  );
};
