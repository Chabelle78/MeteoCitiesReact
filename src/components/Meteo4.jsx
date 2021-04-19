import React from "react";

export default function Meteo4({ item, handleClick }) {
  return (
    <div>
      <button
        onClick={(e) => {
          {
            handleClick(e, item);
          }
        }}
      >
        Click to know what the condition is in Lyon : (
        item.current_condition.condition)
      </button>
    </div>
  );
}
