// components/ScrollIndicator.js
import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Ícone de seta para baixo
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <FaChevronDown className="scroll-icon" />
    </div>
  );
};

export default ScrollIndicator;
