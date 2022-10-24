import styled from "styled-components";

export const ArrowDiv = styled.div`
  background: ${(props) => props.theme.color};
  height: 3px;
  width: 30px;
  margin: auto 0 auto auto;
  position: relative;
  border-radius: 100px;
  cursor: pointer;
  transform: rotate(-90deg);
  &:before,
  &:after {
    content: "";
    background: ${(props) => props.theme.color};
    border-radius: 100px;
    position: absolute;
    height: 3px;
    width: 15px;
  }

  &:before {
    background: ${(props) => props.theme.color};
    right: -3px;
    bottom: -4px;
    transform: rotate(-45deg);
    animation: ${(props) =>
      props.active
        ? "animation-1-before-reverse 0.6s ease 0s 1 alternate both"
        : "animation-1-before 0.6s ease 0s 1 alternate both"};
  }

  &:after {
    background: ${(props) => props.theme.color};
    right: -3px;
    top: -4px;
    transform: rotate(45deg);
    animation: ${(props) =>
      props.active
        ? "animation-1-after-reverse 0.6s ease 0s 1 alternate both"
        : "animation-1-after 0.6s ease 0s 1 alternate both"};
  }

  @keyframes animation-1-after {
    0% {
      right: -3px;
      top: -4px;
      transform: rotate(45deg);
      background: ${(props) => props.theme.color};
    }

    50% {
      width: 3px;
      border-radius: 50%;
      top: -20px;
      left: 15px;
    }

    100% {
      left: -3px;
      bottom: -4px;
      transform: rotate(135deg);
      height: 3px;
      width: 15px;
      background: ${(props) => props.theme.color};
    }
  }

  @keyframes animation-1-before {
    0% {
      right: -3px;
      bottom: -4px;
      transform: rotate(-45deg);
      background: ${(props) => props.theme.color};
    }

    50% {
      width: 3px;
      border-radius: 50%;
      bottom: -20px;
      left: 15px;
    }

    100% {
      left: -3px;
      bottom: -4px;
      transform: rotate(-135deg);
      height: 3px;
      width: 15px;
      background: ${(props) => props.theme.color};
    }
  }
  @keyframes animation-1-after-reverse {
    0% {
      left: -3px;
      bottom: -4px;
      transform: rotate(135deg);
      height: 3px;
      width: 15px;
      background: ${(props) => props.theme.color};
    }

    50% {
      width: 3px;
      border-radius: 50%;
      top: -20px;
      left: 15px;
    }

    100% {
      right: -3px;
      top: -4px;
      transform: rotate(45deg);
    }
  }
  @keyframes animation-1-before-reverse {
    0% {
      left: -3px;
      bottom: -4px;
      transform: rotate(-135deg);
      height: 3px;
      width: 15px;
      background: ${(props) => props.theme.color};
    }

    50% {
      width: 3px;
      border-radius: 50%;
      bottom: -20px;
      left: 15px;
    }

    100% {
      right: -3px;
      bottom: -4px;
      transform: rotate(-45deg);
      background: ${(props) => props.theme.color};
    }
  }
`;
