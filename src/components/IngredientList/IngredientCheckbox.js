import React from "react";
import './IngredientList.css';

export const IngredientCheckbox = ({ label, onCheckboxChange, checked }) => (
  <div className="checked_container">
      <input
        className="checked_input"
        id={label}
        type="checkbox"
        name={label}
        checked={checked}
        onChange={() => onCheckboxChange(label)}
      />
      <label className="checked_label" htmlFor={label}>{label}</label>
  </div>
);
