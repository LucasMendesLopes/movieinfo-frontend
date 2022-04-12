import * as s from "./styled";

export const Button = ({ color, text, onClick, width }) => {
  return (
    <s.Button
      width={width || "156px"}
      color={color || "#7010d2"}
      onClick={onClick}
    >
      {text}
    </s.Button>
  );
};
