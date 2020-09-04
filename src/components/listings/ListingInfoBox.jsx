import React from "react";

export default function ListingInfoBox(props) {
  const { icon, title, children } = props;
  console.log(React.Children);

  return (
    <div className="tr-single-box">
      <div className="tr-single-header">
        <h4>
          <i className={icon}></i> {title}
        </h4>
      </div>
      <div className="tr-single-body">
        <ul className="extra-service">
          {React.Children.map(children, (c) => (
            <li>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
