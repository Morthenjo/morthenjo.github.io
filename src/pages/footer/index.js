import {
  Blur2,
  FlexRow,
  FooterA,
  FooterDiv,
  FooterP,
  Logo,
} from "../../components/Styles";
import GithubImg from "./img/githublogo.svg";
import LinkedInImg from "./img/LinkedIn_icon.svg.png";
import MailIcon from "./img/mailIcon.png";
import Discord from "./img/discordlogo.png";

const Footer = () => {
  return (
    <Blur2>
      <FooterDiv>
        <FlexRow>
          <Logo src={GithubImg} alt="Github Icon" />
          <FooterA
            href="https://github.com/morthenjo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FooterP>Github</FooterP>
          </FooterA>
          <Logo src={LinkedInImg} alt="Linked In Icon" />
          <FooterA
            href="https://www.linkedin.com/in/morthen-johannessen-99b834230/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FooterP>LinkedIn</FooterP>
          </FooterA>
          <Logo src={MailIcon} alt="Mail Icon" />
          <FooterA
            href="mailto:morthenjo.kodehode@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FooterP>Mail</FooterP>
          </FooterA>
          <Logo src={Discord} alt="Discord Icon" />
          <FooterA
            href="https://discordapp.com/users/108247927687761920"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FooterP>Discord</FooterP>
          </FooterA>
        </FlexRow>
        <FooterP>©2022 - MorthenJo</FooterP>
      </FooterDiv>
    </Blur2>
  );
};

export default Footer;
