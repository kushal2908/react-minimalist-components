import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { primaryColor, secondaryColor } from "../../assests/styles/colorPalette";
import PropTypes from "prop-types";
import styles from "./input.module.css";
import { useCallback } from "react";
import { useEffect } from "react";

export default function Input({ type, className, placeholder, disabled, label, onChange, required, full }) {
  const input_ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [err, setErr] = useState(false);

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  useEffect(() => {
    if (required) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [required]);

  let inputStyle = {
    border: `1px solid ${isFocused ? primaryColor : "#bbb"}`,
    width: full ? "100%" : "auto",
  };

  let errStyle = {
    border: `1px solid ${secondaryColor}`,
  };

  return (
    <div className="mb-3">
      <p>
        {label} {required && <span>*</span>}
      </p>
      <input
        label={label}
        ref={input_ref}
        type={type}
        placeholder={placeholder}
        className={`${className}`}
        style={inputStyle}
        onChange={() => onChange}
        disabled={disabled}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        required={required}
      />
    </div>
  );
}

// Prop Type
Input.prototype = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  full: PropTypes.bool,
  onChange: PropTypes.func,
};

//Default Props
Input.defaultProps = {
  type: "text",
  className: "",
  disabled: false,
  required: false,
  full: false,
};
