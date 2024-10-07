import styled from "@emotion/styled";
import { m } from "framer-motion";

const StyledAnimatedQuote = styled(m.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 0 20px;

  font-weight: bold;

  .a {
    display: flex;
    gap: 10px;
  }
  .b {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 2rem;
    aspect-ratio: 156/108;
    width: 150px;
    border: 2px solid ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    border-radius: 4px;
    background-color: ${({ theme: { strokeColorPrimary } }): string =>
      strokeColorPrimary};
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
    box-shadow: 0 0 5px 0
      ${({ theme: { shadowColorPrimary } }): string => shadowColorPrimary};
  }
  .c {
    font-size: 1rem;
  }
  .d {
    display: grid;
    grid-template-areas:
      "a b c c d e"
      "f g h i j k";
    height: 200px;
    /* grid-template-rows: repeat(5, minmax(0, 1fr));
    grid-template-columns: repeat(10, minmax(0, 1fr)); */
    gap: 10px;
  }
  .e {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
    border-radius: 4px;
    border: 1px solid ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};

    background-color: ${({ theme: { strokeColorPrimary } }): string =>
      strokeColorPrimary};
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
    box-shadow: 0 0 5px 0
      ${({ theme: { shadowColorPrimary } }): string => shadowColorPrimary};
  }
  .header {
    display: flex;
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
    font-weight: bold;
    font-size: 1rem;
  }

  .job-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* outline: 1px dotted #00ffcc; */
  }
  .job {
    display: flex;
    align-items: stretch;
    height: 70px;
    background-color: ${({ theme: { fillColorPrimary } }): string => fillColorPrimary};
    border: 1px solid ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    border-radius: 4px;

    gap: 10px;
  }

  .job-icon {
    display: grid;
    place-items: center;
    height: 100%;
    aspect-ratio: 1;
    border-right: 1px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    font-size: 1.5rem;
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
  }
  .job-body {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    font-size: 1rem;
    flex: 1;
    gap: 10px;
  }
  .job-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .job-title {
    font-weight: bold;
  }
  .job-year {
    font-size: 0.8rem;
    color: ${({ theme: { redColorPrimary } }): string => redColorPrimary};
  }
  .buttons {
    display: flex;
    align-items: end;
    padding: 0 10px 10px 0;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ theme: { fillColorPrimary } }): string => fillColorPrimary};
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
    text-decoration: none;
    padding: 0 10px;
    height: 36px;
    transition: background-color 200ms;
    &:hover {
      background-color: ${({ theme: { strokeColorPrimary } }): string =>
        strokeColorPrimary};
    }
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

export default StyledAnimatedQuote;
