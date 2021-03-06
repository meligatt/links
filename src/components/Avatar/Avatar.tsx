import * as React from "react";
import styled from "styled-components";

// TODO: avatar image can be as a background-image in the styled components,
// with a background-size: cover to preserve the aspect ratio.
const AvatarStyled = styled.img`
  border-radius: 50%;
`;

type AvatarProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  src,
  alt = "user name",
  width = 64,
  height = 64,
}): JSX.Element => {
  return <AvatarStyled src={src} alt={alt} width={width} height={height} />;
};
