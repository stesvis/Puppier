import { Link } from "react-router-dom";
import React from "react";

export default function Tag(props) {
  const { tag } = props;

  return (
    <div className="icon-box-icon-block">
      <Link to="#">
        <div className="tag">
          {/* <i className="lni-car-alt"></i> */}
          <div className="icon-box-text">{tag}</div>
        </div>
      </Link>
    </div>
  );
}
