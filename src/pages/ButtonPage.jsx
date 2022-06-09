import React from "react";
import { useState } from "react";
import Button from "../component/Button/Button";
import Card from "../component/Card/Card";

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const onLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Card title="Button">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="danger">Danger</Button>
        <Button disabled>Disabled</Button>
        <Button variant="primary" loading={loading} onClick={onLoad}>
          {loading ? "Loading..." : "Loading"}
        </Button>
        <Button block variant="primary">
          Block
        </Button>
      </Card>
    </div>
  );
}
