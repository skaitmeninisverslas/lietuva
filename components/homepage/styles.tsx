import styled, { css } from "styled-components";

import { MdMap } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";
import { pxToRem } from "../../styles/pxToRem";
import { breakpoint } from "../../styles/breakpoints";

export const StyledWrapper = styled.div`
  box-shadow: 0 ${pxToRem(6)} ${pxToRem(20)} #172e621a;
  border-radius: ${pxToRem(8)};
  display: flex;
  flex-direction: column;
  width: calc((100% - ${pxToRem(40)}));
  margin: 0 auto ${pxToRem(60)} auto;
  text-align: center;
  @media ${breakpoint.xlMin} {
    width: 100%;
  }
  @media ${breakpoint.mdMin} {
    flex-direction: row;
    text-align: left;
  }
`;

export const StyledBlock = styled.div`
  padding: ${pxToRem(20)};
  width: calc((100% - ${pxToRem(160)}));
  margin: 0 auto;
  @media ${breakpoint.lgMin} {
    padding: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(56)};
  }
  @media ${breakpoint.mdMin} {
    flex-direction: row;
    width: calc(((100% / 3) - ${pxToRem(20)}));
  }
`;

export const StyledBlockTitle = styled.span`
  font-weight: bold;
  display: block;
  font-size: ${pxToRem(20)};
  color: #0000bb;
  margin-bottom: ${pxToRem(10)};
  @media ${breakpoint.lgMin} {
    font-size: ${pxToRem(24)};
  }
`;

export const StyledIcon = css`
  color: #0000bb;
  font-size: ${pxToRem(40)};
`;
export const StyledMap = styled(MdMap)`
  ${StyledIcon}
`;
export const StyledQuestion = styled(BsQuestionLg)`
  ${StyledIcon}
`;
export const StyledItem = styled.span`
  display: block;
  padding: ${pxToRem(10)} 0;
  border-top: ${pxToRem(1)} solid #e9ebef;
  &.no-border {
    border-top: none !important;
  }
`;

export const StyledLink = styled.a`
  margin-top: ${pxToRem(20)};
  transition: margin-top 0.2s ease-out;
  display: block;
  padding: ${pxToRem(10)} 0;
  color: #0000bb;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  border-radius: ${pxToRem(3)};
  background: #fff;

  &:hover {
    margin-top: ${pxToRem(15)};
  }
`;
export const StyledSelector = styled.div`
  padding: ${pxToRem(20)};
  background: #0000bb;
  margin: ${pxToRem(20)};
  border-radius: ${pxToRem(8)};
  text-align: center;
  @media ${breakpoint.lgMin} {
    margin: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(56)};
  }
  @media ${breakpoint.mdMin} {
    flex-direction: row;
    width: calc(((100% / 3) - ${pxToRem(20)}));
    text-align: left;
  }
`;
export const StyledSelectorInput = styled.span`
  display: block;
  padding: ${pxToRem(10)} 0;
  border: ${pxToRem(1)} solid #e9ebef;
  margin: 0;
  color: #fff;
  position: relative;
  border-radius: ${pxToRem(3)};
  margin-top: ${pxToRem(20)};
  @media ${breakpoint.mdMin} {
    padding: ${pxToRem(10)} 0 ${pxToRem(10)} ${pxToRem(20)};
    max-width: calc((100% - ${pxToRem(20)}));
  }
`;

export const StyledSelectorTitle = styled.div`
  font-weight: bold;
  display: block;
  font-size: ${pxToRem(24)};
  color: #fff;
`;
