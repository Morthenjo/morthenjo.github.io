import { useContext } from "react";
import { activeTxt } from "../../components/Context";
import {
  Flex,
  FaceImage,
  CenterDiv,
  Blur,
  StyledHeader,
  StyledH2,
  StyledH3,
} from "../../components/Styles";

const HomePage = () => {
  const { text } = useContext(activeTxt);

  return (
    <Blur>
      <Flex>
        <FaceImage data-aos="zoom-in-right" data-aos-duration="1000" />
        <CenterDiv data-aos="zoom-in-left" data-aos-duration="1000">
          <StyledH2>{text.Home.Greetings}</StyledH2>
          <StyledHeader>{text.Home.Name}</StyledHeader>
          <StyledH3>{text.Home.Title}</StyledH3>
        </CenterDiv>
      </Flex>
    </Blur>
  );
};

export default HomePage;
