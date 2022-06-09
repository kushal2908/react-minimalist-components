import React from "react";
import { useState } from "react";
import styles from "./button.module.css";
import PropTypes from "prop-types";
import {
  secondaryColor,
  secondaryColorHover,
  primaryColor,
  primaryColorHover,
  defaultColor,
  defaultColorHover,
} from "../../assests/styles/colorPalette";

export default function Button(props) {
  const { children, type, variant, className, block, disabled, style, loading, onClick } = props;
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  let btnStyle = {
    padding: "6px 18px",
    marginLeft: "2px",
    marginRight: "2px",
    border: "0px",
    borderRadius: "4px",
    border: "none",
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: "500",
  };
  //////////// VARIANT //////////
  let variantStyle;
  switch (variant) {
    case "primary":
      variantStyle = {
        backgroundColor: primaryColor,
        color: "#fff",
        transition: "300ms",
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "not-allowed" : "pointer",
      };
      if (hover) {
        variantStyle = {
          ...variantStyle,
          backgroundColor: primaryColorHover,
        };
      }
      break;
    case "danger":
      variantStyle = {
        backgroundColor: secondaryColor,
        color: "#fff",
        transition: "300ms",
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "not-allowed" : "pointer",
      };
      if (hover) {
        variantStyle = {
          ...variantStyle,
          backgroundColor: secondaryColorHover,
        };
      }
      break;
    default:
      variantStyle = {
        background: defaultColor,
        color: "#222",
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "not-allowed" : "pointer",
        transition: "300ms",
        fontWeight: "500",
      };
      if (hover) {
        variantStyle = {
          ...variantStyle,
          background: defaultColorHover,
        };
      }
  }

  let blockStyle = {
    width: "100%",
  };

  let disabledStyle = {
    backgroundColor: "#eee",
    cursor: "not-allowed",
    color: "#666",
  };
  return (
    <>
      <button
        type={type}
        style={
          disabled
            ? { ...disabledStyle, ...style, ...btnStyle }
            : block
            ? { ...variantStyle, ...btnStyle, ...blockStyle, ...style }
            : { ...variantStyle, ...btnStyle, ...style }
        }
        className={className}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={!disabled ? onClick : () => {}}
      >
        {children}
      </button>
    </>
  );
}

// Prop Types
Button.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  variant: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  loading: PropTypes.bool,
};

// Default Types

Button.defaultProps = {
  type: "button",
  disabled: false,
  block: false,
  loading: false,
};
