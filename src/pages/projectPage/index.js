import Projects from "./ProjectData";
import {
  Blur,
  ProjectBox,
  ProjectFlex,
  StyledHeader,
} from "../../components/Styles";
import { activeTxt } from "../../components/Context";
import { useContext } from "react";

const ProjectPage = () => {
  const { text } = useContext(activeTxt);
  return (
    <Blur>
      <StyledHeader data-aos="fade-up" data-aos-duration="1000">
        {text.Project.Title}
      </StyledHeader>
      <ProjectFlex>
        <Projects />
      </ProjectFlex>
    </Blur>
  );
};

export default ProjectPage;
