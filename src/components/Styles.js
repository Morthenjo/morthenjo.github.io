import styled from "styled-components";
import sunriseW from "../img/sunriseW.avif";
import sun from "../img/sun.png";
import nightfall from "../img/nightfall.avif";
import nightfallW from "../img/nightfallW.avif";
import moon from "../img/moon.png";
import MorthenL from "../pages/homePage/morthenLight.jpg";
import MorthenD from "../pages/homePage/morthenDark.jpg";
import ArrowD from "../pages/projectPage/img/arrowD.png";
import ArrowR from "../pages/projectPage/img/arrowR.png";

//------------------------------------------------------------------------------------//
//                               Light & Dark                                         //
//------------------------------------------------------------------------------------//

export const darkMode = {
  color: "#f0f0f0",
  background: "rgba(10, 10, 10, 0.20)",
  bgImg: nightfall,
  bgImgDesktop: nightfallW,
  img: moon,
  link: "#ADB2F8",
  project1: "rgba(0, 0, 0, 0.5)",
  project2: "rgba(0, 0, 0, 0)",
  project3: "rgba(0, 0, 0, 0)",
  project4: "rgba(0, 0, 0, 0.5)",
  face: MorthenD,
  btnBg: "rgba(100, 100, 100, 0.20)",
};

export const lightMode = {
  color: "#141415",
  background: "rgba(200, 200, 255, 0.45)",
  bgImg: sunriseW,
  bgImgDesktop: sunriseW,
  img: sun,
  link: "#000AA2",
  project1: "rgba(200, 200, 255, 0.8)",
  project2: "rgba(255, 255, 255, 0)",
  project3: "rgba(255, 255, 255, 0)",
  project4: "rgba(200, 200, 255, 0.8)",
  face: MorthenL,
  btnBg: "rgba(200, 200, 255, 0.75)",
};

//------------------------------------------------------------------------------------//
//                                    DIVS                                            //
//------------------------------------------------------------------------------------//

// Adds a container to hold the background and site in place
export const Box = styled.div`
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${(props) => props.theme.bgImgDesktop}) no-repeat center
    center fixed;
  background-size: cover;
  animation-duration: 1s;
  transition: 1s;
  @media (max-width: 765px) {
    background: url(${(props) => props.theme.bgImg}) no-repeat top center fixed;
    padding-top: 5%;
  }
`;

// Container for content that blurs the background
export const Blur = styled.div`
  background: ${(props) => props.theme.background};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 5% 5% 0;
  transition: 1s;
  @media (max-width: 768px) {
    margin: 20% 2% 20%;
  }
  @media (max-width: 400px) {
    margin: 40% 2% 20%;
  }
`;

// Container for the Footer that blurs the background
export const Blur2 = styled.div`
  background: ${(props) => props.theme.background};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  margin-top: 5%;
`;

// Flex Container
export const Flex = styled.div`
  display: flex;
  margin: 5% 10%;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 10px;
    flex-direction: column;
  }
`;

// Flex direction Row container
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

// Flex direction coloumn container
export const FlexColoumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 10%;
`;

// Container to center text and itself
export const CenterDiv = styled.div`
  text-align: center;
  margin: auto 0 auto 10%;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

//Container for the footer
export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 2%;
    margin: 0 auto;
  }
`;

export const ProjectContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  text-align: center;
`;

export const ProjectDiv = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 90%;
  margin: auto;
  padding: 0 0 2%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 0 auto;
    width: 90%;
  }
`;

export const ProjectTextDiv = styled.div`
  width: 50%;
  margin-left: auto;
  padding: 0 5rem;
  background-image: linear-gradient(
    135deg,
    ${(props) => props.theme.project1} 0%,
    ${(props) => props.theme.project2} 22%,
    ${(props) => props.theme.project3} 78%,
    ${(props) => props.theme.project4} 100%
  );
  border-radius: 3rem 0 0 3rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    border-radius: 0 0 3rem 3rem;
  }
`;

export const ProjectFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 20%;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
  @media (max-width: 425px) {
    height: 150px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 0 3rem 3rem 0;
  @media (max-width: 768px) {
    border-radius: 3rem 3rem 0 0;
  }
  @media (max-width: 425px) {
    border-radius: 0;
  }
`;

//------------------------------------------------------------------------------------//
//                                    TEXT                                            //
//------------------------------------------------------------------------------------//

export const StyledH1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color};
  padding: 0 0 5%;
`;

export const StyledHeader = styled.h1`
  color: ${(props) => props.theme.color};
  text-decoration: underline;
  text-align: center;
  font-weight: 800;
  transition: 1s;
  text-shadow: 2px 3px 0px rgba(147, 149, 151, 1);
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const StyledH2 = styled.h2`
  text-align: center;
  font-weight: bold;
  transition: 1s;
  color: ${(props) => props.theme.color};
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledH3 = styled.h3`
  color: ${(props) => props.theme.color};
  transition: 1s;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledAboutH3 = styled.h3`
  color: ${(props) => props.theme.color};
  text-decoration: underline;
  font-weight: bold;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledAboutP = styled.p`
  color: ${(props) => props.theme.color};
  font-weight: 400;
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  } ;
`;

export const StyledP = styled.p`
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-weight: 400;
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const FooterP = styled.p`
  color: ${(props) => props.theme.color};
  font-weight: 400;
  font-size: 0.8rem;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 0.6rem;
  }
`;

export const StyledA = styled.a`
  color: ${(props) => props.theme.link};
`;

export const FooterA = styled.a``;

//------------------------------------------------------------------------------------//
//                                    MISC                                            //
//------------------------------------------------------------------------------------//

export const FaceImage = styled.div`
  margin: 0 auto;
  width: 50%;
  min-width: 30%;
  min-height: 400px;
  background: url(${(props) => props.theme.face}) no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 768px) {
    background-position: center;
  }
`;
export const Logo = styled.img`
  height: 20px;
  margin-top: 0.7rem;
  margin-left: 1%;
  @media (max-width: 768px) {
    margin-top: 2%;
    margin-left: 5%;
  }
`;

export const Button = styled.button`
  position: absolute;
  color: ${(props) => props.theme.color};
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: ${(props) => props.theme.background};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  z-index: 2;
  @media (max-width: 768px) {
    top: 4rem;
    right: 2rem;
  }
`;

export const CollapseButton = styled.button`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.btnBg};
  transition: 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1.5rem;
  font-weight: bold;
  width: 20rem;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  cursor: pointer;
  padding: 1rem;
  border-radius: ${(props) => (props.active ? "1rem 1rem 0 0" : "1rem")};
  :hover {
    color: ${(props) => props.theme.link};
  }
  @media (max-width: 425px) {
    width: 90%;
    font-size: 1rem;
  }
`;

export const Arrow = styled.div`
  background: url(${(props) => (props.active ? ArrowD : ArrowR)}) right
    no-repeat;
  background-size: contain;
`;

export const DarkModeButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 3rem;
  height: 2rem;
  background: url(${(props) => props.theme.img}) center center no-repeat;
  background-size: contain;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  z-index: 2;
  @media (max-width: 768px) {
    top: 4rem;
    left: 2rem;
  }
`;
