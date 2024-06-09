import { useState, useEffect } from "react";
import "./activity.css";

const Activity = ({ activity, onClick }) => {
  const isActive = activity !== null && activity !== undefined;

  return (
    <div className={isActive ? "activite" : "activite mute"} onClick={onClick}>
      <p>{activity ? activity.name : ""}</p>
    </div>
  );
};

export default Activity;
