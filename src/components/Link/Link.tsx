import * as React from "react";
import styled from "styled-components";

const ClassicLinkStyled = styled.a`
  background-color: #39e09b;
  color: black;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const ShowsLinkStyled = styled.a`
  border-bottom: 1px solid #dadee0;
  background-color: #f5f7f8;
  color: #000000;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  &:after {
    content: "˃";
  }
`;

type LinkVariants = "shows" | "classic";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  type?: LinkVariants;
};

export const Link: React.FunctionComponent<LinkProps> = ({
  href,
  type = "classic",
  children,
}): JSX.Element => {
  if (type === "shows") {
    return (
      <ShowsLinkStyled href={href} target="_blank">
        {children}
      </ShowsLinkStyled>
    );
  }
  return (
    <ClassicLinkStyled href={href} target="_blank">
      {children}
    </ClassicLinkStyled>
  );
};
