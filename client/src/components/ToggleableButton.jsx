// ToggleableButton.js
import React, { useState } from 'react';

const ToggleableButton = ({ buttonText, initialState = false, children }) => {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <>
      {React.cloneElement(children, { onClick: toggleState })}
      {state && children.props.notesComponent}
    </>
  );
};

export default ToggleableButton;
