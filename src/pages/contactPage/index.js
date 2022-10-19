import { useContext, useState } from "react";
import { activeTxt } from "../../components/Context";
import {
  Blur,
  ContactFlex,
  ContactImg,
  ContactImgContainer,
  ContactLeft,
  ContactP,
  FlexColoumn,
  ImgContact,
  StyledContactA,
  StyledContactH1,
} from "../../components/Styles";
import Telephone from "./telephone.png";
import Phone from "./phone.webp";
import LinkedIn from "../footer/img/LinkedIn_icon.svg.png";
import GithubLogo from "../footer/img/githublogo.svg";
import MailIcon from "../footer/img/mailIcon.png";

const ContactPage = () => {
  const { text } = useContext(activeTxt);
  const [active, setActive] = useState(false);
  return (
    <Blur>
      <StyledContactH1>{text.Contact.Title}</StyledContactH1>
      <ContactFlex>
        <ContactImgContainer>
          <ImgContact src={Phone} />
        </ContactImgContainer>
        <FlexColoumn>
          <>
            <ContactLeft
              onClick={() => {
                navigator.clipboard.writeText("004746819106");
                setActive(true);
                setTimeout(() => {
                  setActive(false);
                }, 1500);
              }}
            >
              <ContactP active={active}>{text.Contact.Copied}</ContactP>
              <ContactImg src={Telephone} alt="Telephone" />
              +47 468 19 106
            </ContactLeft>
          </>
          <>
            <ContactLeft>
              <StyledContactA
                href="mailto:morthenjo.kodehode@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={MailIcon} alt="Mail" />
                Morthenjo.kodehode@gmail.com
              </StyledContactA>
            </ContactLeft>
          </>
          <>
            <ContactLeft>
              <StyledContactA
                href="https://www.linkedin.com/in/morthen-johannessen-99b834230/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={LinkedIn} alt="LinkedIn" />
                LinkedIn
              </StyledContactA>
            </ContactLeft>
          </>
          <>
            <ContactLeft>
              <StyledContactA
                href="https://github.com/morthenjo"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ContactImg src={GithubLogo} alt="Github" />
                Github
              </StyledContactA>
            </ContactLeft>
          </>
        </FlexColoumn>
      </ContactFlex>
    </Blur>
  );
};

export default ContactPage;
