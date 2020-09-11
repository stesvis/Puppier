import { Form } from "react-bootstrap";
import React from "react";

export default function InputWithIcon(props) {
  const { type, value, placeholder, icon, className } = props;

  return (
    <div className="input-with-icon">
      <Form.Control
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
      />
      <i className={icon}></i>
    </div>
  );
}
