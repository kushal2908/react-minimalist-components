import React from "react";
import stx from "../select.module.css";

export default function SignleValueContainer({ selected, placeholder }) {
  const [singleValue] = selected;
  return (
    <div className={stx.placeholder}>
      {singleValue ? <span className={stx.selectedValueText}> {singleValue?.label} </span> : placeholder}
    </div>
  );
}
