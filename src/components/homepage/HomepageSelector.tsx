import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  StyledBlock,
  StyledBlockTitle,
  StyledItem,
  StyledLink,
  StyledMap,
  StyledQuestion,
  StyledSelector,
  StyledSelectorInput,
  StyledSelectorTitle,
  StyledWrapper,
} from "./styles";

const HomepageSelector = () => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <StyledMap />
        <StyledBlockTitle>Atrask regionuose:</StyledBlockTitle>
        <StyledItem className="no-border">
          Miestų nuotraukų galerijas
        </StyledItem>
        <StyledItem>Lankytinas vietas</StyledItem>
        <StyledItem>Maršrutus</StyledItem>
      </StyledBlock>
      <StyledBlock>
        <StyledQuestion />
        <StyledBlockTitle>Sužinok:</StyledBlockTitle>
        <StyledItem className="no-border">
          Kur paragauti vietos maisto
        </StyledItem>
        <StyledItem>Kur pernakvoti</StyledItem>
        <StyledItem>Kur įsigyti suvenyrų</StyledItem>
      </StyledBlock>
      <StyledSelector>
        <StyledSelectorTitle>Rinktis miestą:</StyledSelectorTitle>
        <span>
          <StyledSelectorInput>
            Šiauliai
            <MdOutlineKeyboardArrowDown
              style={{
                position: "absolute",
                right: "10px",
                fontSize: "24px",
              }}
            />
          </StyledSelectorInput>
          <StyledLink href="/">Ieškoti</StyledLink>
        </span>
      </StyledSelector>
    </StyledWrapper>
  );
};
export default HomepageSelector;
