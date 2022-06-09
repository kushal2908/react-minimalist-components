import React from "react";
import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import styles from "./dialogue.module.css";
import PropTypes from "prop-types";
import ClearIndicator from "../Select/components/clear_indicator";

export default function Dialogue({ show, children, title, onClose, size }) {
  const dialogueRef = useRef(null);

  useEffect(() => {
    if (show) {
      dialogueRef.current.classList.add(styles.visible);
    } else {
      dialogueRef.current.classList.remove(styles.visible);
    }
  }, [show]);

  let dialogueStyle = {
    display: show ? "block" : "none",
  };

  // Dialogue Size
  let sizeStyle;
  switch (size) {
    case "sm":
      sizeStyle = {
        width: "40vw",
      };
      break;
    case "lg":
      sizeStyle = {
        width: "80vw",
      };
      break;
    case "md":
      sizeStyle = {
        width: "60vw",
      };
      break;
    default:
      sizeStyle = {
        width: "60vw",
      };
      break;
  }

  return (
    <div ref={dialogueRef} className={styles.dialogue} style={dialogueStyle} onClick={onClose}>
      <div className={styles.dialogueBody} style={sizeStyle}>
        <div
          className={styles.dialogueContent}
          onClick={(e) => {
            e.stopPropagation(); // Do not close the modal if its clicked inside modal-body
          }}
        >
          <div className={styles.dialogueHead}>
            <h5 className="mb-0">{title}</h5>
            <Button onClick={onClose}>
              <ClearIndicator />
            </Button>
          </div>
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </div>
  );
}

// Prop Types
Button.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  size: PropTypes.string,
  onClose: PropTypes.func,

  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

// Default Types
Button.defaultProps = {
  size: "sm",
};
