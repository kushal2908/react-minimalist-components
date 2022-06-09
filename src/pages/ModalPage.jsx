import React from "react";
import { useState } from "react";
import Button from "../component/Button/Button";
import Card from "../component/Card/Card";
import Dialogue from "../component/Dialogue/Dialogue";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Card title="Modal">
        <Button onClick={() => setIsOpen(!isOpen)} variant={"primary"}>
          Modal
        </Button>
        <Dialogue title="Modal" show={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex dolor deserunt necessitatibus! Porro, quis! Rem quia error eos aliquam pariatur quasi atque, harum qui?
          Odit voluptatem tenetur doloribus eaque autem, temporibus porro eius ab facere. A facilis, sit saepe numquam
          aliquam,
          <div className="d-flex mt-3">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
            <Button variant="primary">Confirm</Button>
          </div>
        </Dialogue>
      </Card>
    </div>
  );
}
