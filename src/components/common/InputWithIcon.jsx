import { FormControl } from "react-bootstrap";
import React from "react";

export default function InputWithIcon(props) {
  return (
    <div className="input-with-icon">
      <FormControl {...props} />
      <i className={props.icon}></i>
    </div>
  );
}
