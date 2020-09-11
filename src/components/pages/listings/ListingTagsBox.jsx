import React from "react";
import Tag from "../../Tag";

export default function ListingTagsBox(props) {
  const { tags } = props;

  return (
    <div className="tr-single-box">
      <div className="tr-single-header">
        <h4>
          <i className="lni-tag"></i> Tags
        </h4>
      </div>

      <div className="tr-single-body">
        <ul className="extra-service half">
          {tags.map((tag) => (
            <li key={tag} style={{ width: "unset" }}>
              <Tag tag={tag} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
