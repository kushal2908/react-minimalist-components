import React from "react";

export default function MultiValueContainer({ selected }) {
  return (
    <div>
      {selected.map((option) => (
        <div key={option.value}>{option.label}</div>
      ))}
    </div>
  );
}
