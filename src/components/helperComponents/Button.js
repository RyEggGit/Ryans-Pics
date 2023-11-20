import "./Button.css";
import React from "react";
const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--blue",
  "btn--outline-grey",
];

const SIZES = ["btn--medium", "btn--large", "btn--small"];

export const Button = ({ children, type, click, buttonStyle, buttonSize }) => {
  const checkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyles} ${checkButtonSize}`}
      type={type}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
