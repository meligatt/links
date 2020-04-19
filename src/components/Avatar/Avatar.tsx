import * as React from "react";
import styled from "styled-components";

const AvatarStyled = styled.h3`
  border: 1px solid red;
`;

export const Avatar: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <AvatarStyled> @obiwan </AvatarStyled>
    </>
  );
};
