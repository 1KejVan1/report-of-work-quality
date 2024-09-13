import { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";

import ToolTip from "../../ToolTip/ToolTip";
import Button from "../Button";
import styles from "./delete_button.module.scss";

function DeleteButton({ onClickFunction = Function.prototype }) {
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
    setTooltipPosX(e.clientX);
    setTooltipPosY(e.clientY);
  }

  return (
    <>
      {showToolTip && (
        <ToolTip
          text="Удалить сотрудника"
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
          buttonType={styles.delete_button}
        >
          <MdDelete className={styles.icon} />
        </Button>
      </div>
    </>
  );
}

export default DeleteButton;
