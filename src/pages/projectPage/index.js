import Projects from "./ProjectData";
import { Blur, StyledHeader } from "../../components/Styles";
import { activeTxt } from "../../components/Context";
import { useContext } from "react";

const ProjectPage = () => {
  const { text } = useContext(activeTxt);
  return (
    <Blur>
      <StyledHeader data-aos="fade-up" data-aos-duration="1000">
        {text.Project.Title}
      </StyledHeader>
      <Projects />
    </Blur>
  );
};

export default ProjectPage;
