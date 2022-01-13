import styled from "styled-components";

import { pxToRem } from "../../styles/pxToRem";
import { breakpoint } from "../../styles/breakpoints";
import { down, Pulse } from "../../styles/animations";

export const StyledMenu = styled.div`
  height: ${pxToRem(50)};
  background: #0000bb;
  border-radius: ${pxToRem(20)};
  display: flex;
  align-items: center;

  &.active {
    height: auto;
    padding: ${pxToRem(40)};
    position: fixed;
    top: 0;
    bottom: 100%;
    right: 0;
    left: ${pxToRem(60)};
    flex-direction: column;
    border-radius: 0;
    animation: ${down} 0.7s forwards;
    z-index: 6;
    border-radius: ${pxToRem(20)};

    @media ${breakpoint.smMin} {
      left: ${pxToRem(90)};
    }
  }

  svg {
    color: #fff;
    font-size: ${pxToRem(29)};
    cursor: pointer;
    margin: 0 auto;
    path {
      stroke: #fff;
    }
  }

  ul {
    margin: 0 auto;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media ${breakpoint.lgMin} {
      flex-direction: row;
      height: auto;
    }

    li {
      padding: ${pxToRem(20)};
      border-bottom: 1px solid #fff;
      @media ${breakpoint.lgMin} {
        border-right: ${pxToRem(1)} solid #fff;
        display: inline-block;
        vertical-align: middle;
        padding: 0 ${pxToRem(15)};
        border-bottom: none;
      }
      &:last-child {
        border: none;
      }

      p {
        margin: 0;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-size: ${pxToRem(20)};
        padding: 5px;
        &.animated {
          animation: ${Pulse} 2s infinite;
          border-radius: 8px;
        }
        @media ${breakpoint.lgMin} {
          text-transform: none;
          font-size: ${pxToRem(16)};

          &:hover {
            letter-spacing: 0 !important;

            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
