import styled from "styled-components";

export const Button = styled.button`
  width: ${(width) => width.width};
  height: 40px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  background-color: ${(color) => color.color};
  border: none;
  border-radius: 50px;
  font-size: 1.05rem;
  letter-spacing: 0.08vw;
  font-weight: bold;
  color: #ffffff;
  transition: all ease 0.5s;

  :hover {
    background-color: #430980;
  }
`;
