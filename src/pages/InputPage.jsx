import React from "react";
import Button from "../component/Button/Button";
import Card from "../component/Card/Card";
import Input from "../component/Input/Input";

export default function () {
  return (
    <div>
      <Card title="Input">
        <form>
          <Input label="Label" placeholder="Input" />
          <Input label="Required Input" placeholder="Required Input" required />
          <Input label="Input Full" placeholder="Input Full" full />
          <Button>Cancel</Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
