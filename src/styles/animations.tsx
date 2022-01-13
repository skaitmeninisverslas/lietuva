import { keyframes } from "styled-components";

import { pxToRem } from "./pxToRem";

export const grow = keyframes`
    from {
        right: 100%;
    }
    to {
        right: 0;
    }
`;

export const down = keyframes`
    from {
        bottom: 100%;
    }
    to {
        bottom: 0;
    }
`;

export const expand = keyframes`
    from {
    font-size: ${pxToRem(29)};
    }

    to {
    font-size: ${pxToRem(40)};
    }
`;

export const Pulse = keyframes`
  0% {
   outline: 5px solid rgba(255,255,255, 0.5);
  }

 

100% {
    
    outline: 5px solid rgba(255,255,255, 0);
  }
`;
