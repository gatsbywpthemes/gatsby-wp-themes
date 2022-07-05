import React from "react";

export const SubmitButton = ({ disabled, children }) => {
  return (
    <div className="submit-button-container">
      <button className="submit-button" type="submit" disabled={disabled}>
        {children}
      </button>
    </div>
  );
};
