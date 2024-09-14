import { useState } from "react";

import { MdEdit } from "react-icons/md";

import ToolTip from "../../ToolTip/ToolTip";
import Button from "../Button";
import styles from "./edit_button.module.scss";

function EditButton({ onClickFunction = Function.prototype }) {
  const [showToolTip, setShowToolTip] = useState(false);
  const [tooltipPosX, setTooltipPosX] = useState(undefined);
  const [tooltipPosY, setTooltipPosY] = useState(undefined);

  function handleMouseLeave() {
    setShowToolTip(false);
  }

  function handleMouseEnter() {
    setShowToolTip(true);
  }

  function handleMouseMove(e = MouseEvent.prototype) {
    setTooltipPosX(e.pageX);
    setTooltipPosY(e.pageY);
  }

  return (
    <>
      {showToolTip && (
        <ToolTip
          text="Редактировать ФИО"
          posX={tooltipPosX}
          posY={tooltipPosY}
        />
      )}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Button
          onClickFunction={onClickFunction}
          buttonType={styles.edit_button}
        >
          <MdEdit className={styles.icon} />
        </Button>
      </div>
    </>
  );
}

export default EditButton;
