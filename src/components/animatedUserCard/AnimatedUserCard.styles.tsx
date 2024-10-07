import styled from "@emotion/styled";
import { m } from "framer-motion";

export const StyledAnimatedUserCard = styled(m.div)`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .user-label {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: clamp(0.5rem, 5vw, 2rem);
    font-weight: bold;
    padding: 20px;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  .user-label-description {
    font-size: clamp(0.5rem, 3vw, 1.2rem);
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
  }
  .user-label-other {
    font-size: 0.8rem;
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
  }

  .user-avatar {
    position: relative;
    flex: 0 1 clamp(150px, 40vw, 250px);
    aspect-ratio: 1;
    background-image: url("./images/avatar.webp");
    background-size: cover;
    border-radius: 50%;
    border: 2px solid ${({ theme: { textColorPrimary } }): string => textColorPrimary};
    box-shadow: 0 0 25px 5px
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
  }
`;
