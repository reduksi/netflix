import React from "react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-mdi/chevron-left";
import chevronRight from "@iconify/icons-mdi/chevron-right";

import './style.css'

export default function control({onClick, arrowDirection}){
    return (
    <div className={`control control-${arrowDirection}`}>
      <div className="control-arrow" onClick={onClick}>
        <Icon icon={arrowDirection === "right" ? chevronRight : chevronLeft} />
      </div>
    </div>
    )
}