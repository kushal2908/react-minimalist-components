import React from "react";
import Card from "../component/Card/Card";
import Select from "../component/Select/Select";

export default function SelectPage() {
  return (
    <Card title="Select">
      <p className="mb-2">It's still under development</p>
      <Select options={Seeds} placeholder="Select Option" />
    </Card>
  );
}

export const Seeds = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
  { value: "white", label: "White" },
  { value: "light", label: "Light" },
];
