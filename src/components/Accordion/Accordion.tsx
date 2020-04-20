import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const AccordionHeaderStyled = styled.button`
  background-color: #39e09b;
  color: black;
  padding: 0.2rem;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
const NestedAccordionHeaderStyled = styled.button`
  background-color: #f5f7f8;
  color: black;
  padding: 0.2rem;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
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
  isNested?: boolean;
  children?: React.ReactNode;
};

export const Accordion: React.FunctionComponent<AccordionProps> = ({
  label,
  isNested = false,
  children,
}): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isNested ? (
        <NestedAccordionHeaderStyled
          onClick={(): void => setIsVisible(!isVisible)}
        >
          icon
          {label}
          chevron
        </NestedAccordionHeaderStyled>
      ) : (
        <AccordionHeaderStyled onClick={(): void => setIsVisible(!isVisible)}>
          {label}
        </AccordionHeaderStyled>
      )}

      <AccordionPanelStyled isVisible={isVisible}>
        {children}
      </AccordionPanelStyled>
    </>
  );
};
