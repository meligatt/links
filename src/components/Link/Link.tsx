import * as React from "react";
import styled from "styled-components";

const LinkStyled = styled.a`
  border-width: 2px;
  border-style: solid;
  border-color: pink;
  background-color: beige;
  color: #000000;
  border-radius: 8px;
`;

type LinkProps = {
  href: string;
  text: string;
};

export const Link: React.FunctionComponent<LinkProps> = ({
  href,
  text,
}): JSX.Element => {
  return (
    <LinkStyled href={href} target="_blank">
      {text}
    </LinkStyled>
  );
};
