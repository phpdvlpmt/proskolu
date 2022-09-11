import React from "react";
import { useState } from "react";

function accordion(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      <div>
        <button className="font-bold text-left" onClick={toggle}>
          {props.title}
        </button>
      </div>
      <div
        className={` ${
          isShowing
            ? `visible transition-all duration-200 ease-in opacity-100 h-full `
            : `opacity-0 invisible h-0`
        }`}
        /*style={{ display: isShowing ? "block" : "none" }}*/
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}

export default accordion;
