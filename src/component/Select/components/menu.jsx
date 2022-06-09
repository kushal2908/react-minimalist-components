import React from "react";
import { List } from "./list";
import { ListItem } from "./list_item";
import styles from "../select.module.css";
import { useState } from "react";

export default function Menu({ options, multiSelect, onSelect, onMenuStateToggle, ...props }) {
  const [filteredOptions, setFilteredOptions] = useState(options);
  function handleSelection(selected) {
    if (!multiSelect) {
      onSelect([selected]);
      onMenuStateToggle(false);
    } else {
      onSelect((prevState) =>
        prevState.some((item) => item.value === selected.value)
          ? prevState.filter((item) => item.value !== selected.value)
          : [...prevState, selected]
      );
    }
  }

  const handleChange = ({ target }) => {
    const filtered = options.filter((option) => option.label.toLowerCase().includes(target.value.toLowerCase()));
    setFilteredOptions(filtered);
  };

  return (
    <div {...props}>
      <List>
        <div className={styles.inputDiv}>
          <input placeholder="Search..." onChange={handleChange} className={styles.input} />
        </div>
        {filteredOptions.map((item) => {
          return (
            <ListItem key={item.value} onClick={() => handleSelection(item)}>
              {item.label}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
