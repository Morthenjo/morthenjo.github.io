import "react-responsive-carousel/lib/styles/carousel.css";
import {
  CollapseButton,
  ImgContainer,
  ProjectContainer,
  ProjectDiv,
  ProjectImg,
  ProjectTextDiv,
  StyledA,
  StyledH4,
  StyledP,
} from "../../components/Styles";
import { activeTxt } from "../../components/Context";
import { useContext } from "react";
import { useState } from "react";
import { ArrowDiv } from "../../components/arrow/styles";

const Projects = () => {
  const { text } = useContext(activeTxt);
  const [active, setActive] = useState({});
  const menuToggle = (id) => {
    setActive((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  const SmallProjectCard = text.Projects.map((item, idx) => {
    return (
      <ProjectContainer key={idx}>
        <CollapseButton
          onClick={() => menuToggle(item.id)}
          active={active[item.id]}
        >
          <StyledH4>
            {item.title}
            <ArrowDiv active={active[item.id]} />
          </StyledH4>
        </CollapseButton>
        <ProjectDiv key={item.id} active={active[item.id]}>
          <ProjectTextDiv>
            <StyledP>{item.description}</StyledP>
            <StyledP>
              <StyledA
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {item.website}
              </StyledA>
              <StyledA
                href={item.repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </StyledA>
            </StyledP>
          </ProjectTextDiv>

          <ImgContainer>
            <ProjectImg src={item.coverIMG} alt={item.alt} />
          </ImgContainer>
        </ProjectDiv>
      </ProjectContainer>
    );
  });
  return <>{SmallProjectCard}</>;
};

export default Projects;
