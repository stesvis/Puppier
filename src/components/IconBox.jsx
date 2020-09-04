import { Link } from "react-router-dom";
import React from "react";

export default function IconBox(props) {
  const { icon, text } = props;

  return (
    <div className="icon-box-icon-block">
      <Link to="#">
        <div className="icon-box-round">
          <i className={icon}></i>
        </div>
        <div className="icon-box-text">{text}</div>
      </Link>
    </div>
  );
}
