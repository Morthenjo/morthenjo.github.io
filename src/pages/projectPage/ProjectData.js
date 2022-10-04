import "react-responsive-carousel/lib/styles/carousel.css";
import {
  Arrow,
  CollapseButton,
  ImgContainer,
  ProjectContainer,
  ProjectDiv,
  ProjectImg,
  ProjectTextDiv,
  StyledA,
  StyledP,
} from "../../components/Styles";
import { activeTxt } from "../../components/Context";
import { useContext } from "react";
import { useState } from "react";

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
          <Arrow active={active[item.id]}>{item.title}</Arrow>
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
  return <div>{SmallProjectCard}</div>;
};

export default Projects;
