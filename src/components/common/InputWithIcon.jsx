import { Form } from "react-bootstrap";
import React from "react";

export default function InputWithIcon(props) {
  return (
    <div className="input-with-icon">
      <Form.Control {...props} />
      <i className={props.icon}></i>
    </div>
  );
}
