import { forwardRef } from "react";
import stx from "../select.module.css";

export const List = forwardRef(({ children, popperAttributes, ...props }, ref) => {
  return (
    <ul {...props} className={stx.optionBox} ref={ref} {...popperAttributes}>
      {children}
    </ul>
  );
});
