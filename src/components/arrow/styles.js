import styled from "styled-components";

export const ArrowDiv = styled.div`
  background: #fff;
  height: 3px;
  width: 30px;
  margin: 1rem auto 0;
  position: relative;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    background: #fff;
    position: absolute;
    height: 3px;
    width: 15px;
  }

  &:before {
    right: -3px;
    bottom: -4px;
    transform: rotate(-45deg);
    animation: ${(props) =>
      props.active
        ? "animation-1-before-reverse 1s ease 0s 1 alternate both"
        : "animation-1-before 1s ease 0s 1 alternate both"};
  }

  &:after {
    right: -3px;
    top: -4px;
    transform: rotate(45deg);
    animation: ${(props) =>
      props.active
        ? "animation-1-after-reverse 1s ease 0s 1 alternate both"
        : "animation-1-after 1s ease 0s 1 alternate both"};
  }

  @keyframes animation-1-after {
    0% {
      right: -3px;
      top: -4px;
      transform: rotate(45deg);
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
      background: #fff;
    }
  }

  @keyframes animation-1-before {
    0% {
      right: -3px;
      bottom: -4px;
      transform: rotate(-45deg);
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
      background: #fff;
    }
  }
  @keyframes animation-1-after-reverse {
    0% {
      left: -3px;
      bottom: -4px;
      transform: rotate(135deg);
      height: 3px;
      width: 15px;
      background: #fff;
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
      background: #fff;
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
    }
  }
`;
