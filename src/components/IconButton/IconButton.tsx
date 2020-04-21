import * as React from "react";
import styled from "styled-components";

const IconButtonStyled = styled.button`
  width: 100%;
  background-color: #f5f7f8;
  border: none;
`;

type IconButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  onClick,
  children,
}): JSX.Element => {
  return <IconButtonStyled onClick={onClick}>{children}</IconButtonStyled>;
};
