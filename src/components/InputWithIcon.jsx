import { Form } from "react-bootstrap";
import React from "react";

export default function InputWithIcon(props) {
  const { type, name, value, placeholder, icon, className, onChange } = props;

  return (
    <div className="input-with-icon">
      <Form.Control
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <i className={icon}></i>
    </div>
  );
}
