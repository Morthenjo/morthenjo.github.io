import { useState } from "react";
import { Blur, StyledContactH1 } from "../../components/Styles";

const SkillPage = () => {
  const [input, setInput] = useState({
    input: "",
    stuff: "",
    bruh: "",
  });

  const Submit = (e) => {
    console.log(e);
  };

  const HandleChange = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    Submit(e.target.value);
  };
  return (
    <Blur>
      <StyledContactH1>Bruh</StyledContactH1>
      <input
        name="input"
        value={input.input}
        placeholder="bruh"
        onChange={HandleChange}
      ></input>
    </Blur>
  );
};

export default SkillPage;
