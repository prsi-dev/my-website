import { useState } from "react";

function useToggle(initialState = false) {
  const [toggle, setToggle] = useState(Boolean(initialState));

  function changeToggle() {
    setToggle(!toggle);
  }

  return [toggle, changeToggle];
}

export default useToggle;
