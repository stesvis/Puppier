import React, { useEffect, useRef } from "react";

export function Select2Wrapper(props) {
  const $ = window.$;
  const ele = useRef(null);

  useEffect(() => {
    let $el = ele.current;

    if ($el !== null) {
      let $els = $($el);
      $els
        .select2(props.data !== undefined ? props.data : {})
        .on("select2:select", (event) => {
          if (props.onChange !== undefined) props.onChange(event);
        });
      if (props.value !== undefined)
        $els.val(props.value).trigger("change.select2");
    }
  });

  return (
    <select {...props} ref={ele}>
      {props.children}
    </select>
  );
}

export const Select2WrapperMemo = React.memo(Select2Wrapper);
