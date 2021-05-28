import { useState } from "react";

function useTextInput(initialState = "") {
  const [text, setText] = useState(initialState);

  function changeText(event) {
    setText(event.target.value);
  }

  function resetText() {
    setText("");
  }

  return [text, changeText, resetText];
}

export default useTextInput;
