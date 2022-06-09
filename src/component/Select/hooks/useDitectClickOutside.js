import { useEffect } from "react";

export const useDetectClickOutside = (dropdownRef, setMenuOpen) => {
  function handleClickOutside({ target }) {
    if (!dropdownRef.current?.contains(target)) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
};
