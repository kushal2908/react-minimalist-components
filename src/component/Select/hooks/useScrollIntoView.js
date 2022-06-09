import { useRef } from "react";
import { SCROLL_OPTIONS } from "../constants";

export const useScrollIntoView = () => {
  const listItemRefs = useRef([]);

  function assignListItemRef(ref, index) {
    listItemRefs.current[index] = ref;
  }

  const scrollToHighlightedItem = (index) => {
    const highlightedItem = listItemRefs.current[index];

    highlightedItem && highlightedItem.scrollIntoView(SCROLL_OPTIONS);
  };

  return { assignListItemRef, scrollToHighlightedItem };
};
