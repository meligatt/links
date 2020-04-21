import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const AccordionStyled = styled.div`
  margin-bottom: 1rem;
`;

const AccordionHeaderStyled = styled.button`
  background-color: #39e09b;
  color: black;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`;

const AccordionPanelStyled = styled.div`
  border-bottom: 1px solid #dadee0;
  background-color: #f5f7f8;
  color: #000000;
  display: ${(props: { isVisible: boolean }): string =>
    props.isVisible ? "flex" : "none"};
  flex-direction: column;
`;

type AccordionProps = {
  label: string;
  children?: React.ReactNode;
  customHeader?: ({
    toggleVisibility,
    isVisible,
  }: {
    toggleVisibility: (isVisible: boolean) => void;
    isVisible: boolean;
  }) => JSX.Element;
};

export const Accordion: React.FunctionComponent<AccordionProps> = ({
  label,
  children,
  customHeader,
}): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (isVisible: boolean): void => {
    setIsVisible(!isVisible);
  };
  return (
    <AccordionStyled>
      {typeof customHeader === "function" ? (
        customHeader({ toggleVisibility, isVisible })
      ) : (
        <AccordionHeaderStyled
          onClick={(): void => {
            toggleVisibility(isVisible);
          }}
        >
          {label}
        </AccordionHeaderStyled>
      )}

      <AccordionPanelStyled isVisible={isVisible}>
        {children}
      </AccordionPanelStyled>
    </AccordionStyled>
  );
};
