import { useEffect, useRef, useState } from "react";

import { RxCross2 } from "react-icons/rx";

import styles from "./delete_alert.module.scss";

function DeleteEmployeeAlert({
  onCancelFunction = Function.prototype,
  onSubmitFunction = Function.prototype,
  hideAlertFunction = Function.prototype,
}) {
  const progressbar = useRef(null);
  const [tickValue] = useState(1);
  const [delay] = useState(50);
  const [intervalIds, setIntervalIds] = useState([]);

  useEffect(() => {
    if (intervalIds.length === 0) {
      setIntervalIds((prev) => prev.push(setInterval(progressTick, delay)));
    }
  }, []);

  useEffect(() => {
    if (progressbar.current == null) {
      stopAllIntervals();
      hideAlertFunction();
    }
  }, [progressbar.current]);

  function stopAllIntervals() {
    intervalIds.map((id) => {
      clearInterval(id);
    });
  }

  function decreaseProgressWidth() {
    if (progressbar.current) {
      progressbar.current.style.width = `${parseInt(progressbar.current.style.width) - tickValue}%`;
    }

    return parseInt(progressbar.current?.style?.width ?? 0);
  }

  function progressTick() {
    if (progressbar.current !== null && decreaseProgressWidth() <= 0) {
      progressbar.current = null;
      stopAllIntervals();
      onSubmitFunction();
    }
  }

  function handleOnClick() {
    onCancelFunction();
    progressbar.current = null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title_container}>Отменить</div>
        <div className={styles.button_container}>
          <RxCross2 className={styles.icon} onClick={handleOnClick} />
        </div>
      </div>
      <div className={styles.progress_bar_container}>
        <span
          ref={progressbar}
          className={styles.progress_bar}
          style={{ width: "100%" }}
        >
          <wbr />
        </span>
      </div>
    </div>
  );
}

export default DeleteEmployeeAlert;
