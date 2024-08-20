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
    padding: 10px;
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
    background-image: url("https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/424982717_3605297713056277_8359511818600006794_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KvFVJqXHk8IQ7kNvgGuIkS6&_nc_ht=scontent-waw2-2.xx&oh=00_AYAxhu2H6AO7ku8Ufrjk7wqmRO9sS0BNvyP8t76yWEJQdQ&oe=66C2DBBC");
    background-size: cover;
    border-radius: 50%;
    border: 2px solid ${({ theme: { textColorPrimary } }): string => textColorPrimary};
    box-shadow: 0 0 25px 5px
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
  }
  .user-avatar > canvas {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }
`;
