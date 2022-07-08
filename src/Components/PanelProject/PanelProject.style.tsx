import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";
import Panel from "../Panel/Panel";

export const StyledProjectPanel = styled(Panel)`
  width: 40%;
  @media (max-width: 600px) {
    min-width: 220px;
  }
  min-width: 300px;
  flex: 1;
`;

type StyledProjectComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

export const StyledProjectLangs: StyledProjectComponent = styled.span`
  font-size: 0.8rem;
  padding: 10px;
  background-color: ${({ theme: { background } }) => background};
  color: ${({ theme: { date } }) => date};
`;

export const StyledProjectDescription: StyledProjectComponent = styled.span`
  font-size: 0.9rem;
  padding: 10px;
  flex: 1;
`;