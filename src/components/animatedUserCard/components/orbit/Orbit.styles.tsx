import styled from "@emotion/styled";
import { m } from "framer-motion";

const StyledOrbit = styled(m.div)`
  position: absolute;
  border-radius: 50%;
  animation: rotate 5s linear infinite forwards;
  /* outline: 1px dotted silver; */

  &:before {
    content: "";
    position: absolute;
    top: -15%;
    left: -15%;
    width: 130%;
    height: 130%;
    outline: 1px dotted silver;
    border-radius: 50%;
  }

  .orbit-children {
    display: grid;
    place-items: center;
    position: relative;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    animation: rotate 5s linear infinite forwards reverse;
  }
  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;

export default StyledOrbit;
