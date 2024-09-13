import React, { Children } from "react";

import styles from "./button.module.scss";

function Button({
  children,
  onClickFunction = Function.prototype,
  buttonType = "",
}) {
  return (
    <button
      className={buttonType ? buttonType : styles.button}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default Button;
