import { useContext } from "react";
import { activeTxt } from "../../components/Context";
import {
  Flex,
  Blur,
  StyledAboutH3,
  StyledAboutP,
} from "../../components/Styles";

const AboutMe = () => {
  const { text } = useContext(activeTxt);
  return (
    <Blur>
      <Flex>
        <div>
          <StyledAboutH3 data-aos="fade-down" data-aos-duration="1000">
            {text.About.Now.Title}
          </StyledAboutH3>
          <StyledAboutP data-aos="fade-down" data-aos-duration="1000">
            {text.About.Now.Text}
          </StyledAboutP>
          <StyledAboutH3 data-aos="fade-down" data-aos-duration="1000">
            {text.About.EarlyLife.Title}
          </StyledAboutH3>
          <StyledAboutP data-aos="fade-down" data-aos-duration="1000">
            {text.About.EarlyLife.Text}
          </StyledAboutP>
          <StyledAboutH3 data-aos="fade-down" data-aos-duration="1000">
            {text.About.Hobbies.Title}
          </StyledAboutH3>
          <StyledAboutP data-aos="fade-down" data-aos-duration="1000">
            {text.About.Hobbies.Text}
          </StyledAboutP>
        </div>
      </Flex>
    </Blur>
  );
};

export default AboutMe;
