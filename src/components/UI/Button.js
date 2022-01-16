import React from "react";
import btn from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={btn.button}
      type={props.type || "button"}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;
