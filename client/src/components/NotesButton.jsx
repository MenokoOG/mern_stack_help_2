// NotesButton.js
import React from 'react';

const NotesButton = ({ onClick }) => {
  return (
    <button className="button home-btn" onClick={onClick}>
      Developer Notes
    </button>
  );
}

export default NotesButton;
