import { forwardRef } from "react";
import stx from "../select.module.css";

export const ListItem = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <li {...props} ref={ref} className={`${className}`}>
      {children}
    </li>
  );
});

ListItem.defaultProps = {
  className: "",
};
