import * as React from "react";
import { useState, useEffect } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Avatar } from "../../components/Avatar/Avatar";
import { Link } from "../../components/Link/Link";
import { IconButton } from "../../components/IconButton/IconButton";
import { Accordion } from "../../components/Accordion/Accordion";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme/Default";

const ContainerStyled = styled.div`
  padding: 1rem;
  background-color: ${(props): string => props.theme.background_color};
  color: ${(props): string => props.theme.text_color};
  font-family: sans-serif;
  font-size: 1rem;
`;

const MainStyled = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: auto;
  margin: 0 auto;
`;

// TODO: add test to Main container, mocking fetch api.
export const Main: React.FunctionComponent = (): JSX.Element => {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setTheme(response.themes[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ContainerStyled>
        {data && (
          <PageHeader userName={data.details.username}>
            <Avatar src={data.details.avatarURL} />
          </PageHeader>
        )}
        <MainStyled>
          {/* TODO: For now, the order of appearance of the links is fixed,
          but it could be done reading from an order key in the response.  */}
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
          {/* TODO: icons for now are emojis ^_^ , they can be imported as modules icon from assets */}
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
      </ContainerStyled>
    </ThemeProvider>
  );
};
