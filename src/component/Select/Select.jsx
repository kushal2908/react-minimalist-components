import React from "react";
import { useRef } from "react";
import { useState } from "react";
import ChevronDown from "./components/chevron_down";
import ChevronUp from "./components/chevron_up";
import ClearIndicator from "./components/clear_indicator";
import Menu from "./components/menu";
import MultiValueContainer from "./components/multi_value_container";
import SignleValueContainer from "./components/single_value_container";
import { useDetectClickOutside } from "./hooks/useDitectClickOutside";
import { useScrollIntoView } from "./hooks/useScrollIntoView";
import stx from "./select.module.css";

export default function Select({ prefix, placeholder, disabled, multiSelect, options, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const _options = options || [];

  const dropdownRef = useRef();
  useDetectClickOutside(dropdownRef, setMenuOpen);
  const { assignListItemRef, scrollToHighlightedItem } = useScrollIntoView();

  function toggleMenuState() {
    if (!disabled) {
      setMenuOpen((prevState) => !prevState);
    }
  }

  function handleClearSelected(event) {
    event.stopPropagation();
    setSelected([]);
    setMenuOpen(true);
  }

  return (
    <>
      <div className={stx.select} ref={dropdownRef}>
        <div className={stx.head} onClick={toggleMenuState}>
          <div className={stx.clearDiv}>
            {multiSelect ? (
              <div className={stx.clear}>
                <MultiValueContainer placeholder={placeholder} selected={selected} />
                <div className={stx.clearIcon} onClick={handleClearSelected}>
                  {selected.length != 0 && <ClearIndicator />}
                </div>
              </div>
            ) : (
              <div className={stx.clear}>
                <SignleValueContainer placeholder={placeholder} selected={selected} />
                <div className={stx.clearIcon} onClick={handleClearSelected}>
                  {selected.length != 0 && <ClearIndicator />}
                </div>
              </div>
            )}
          </div>
          <div>{menuOpen ? <ChevronUp /> : <ChevronDown />}</div>
        </div>
        {menuOpen && (
          <Menu options={_options} multiSelect={multiSelect} onSelect={setSelected} onMenuStateToggle={setMenuOpen} />
        )}
      </div>
    </>
  );
}
