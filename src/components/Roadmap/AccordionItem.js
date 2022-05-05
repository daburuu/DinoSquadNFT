import React, { useRef } from "react";

const AccordionItem = ({ element, active, onToggle }) => {
  const { title, text } = element;
  const contentEl = useRef();
  
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        <span className="title">{title}</span>
        <span className="control">{`${active ? '-' : '+'}`}</span>
      </button>
      <div
        ref={contentEl}
        className="text_wrapper"
        style={ active ? { height: contentEl.current.scrollHeight } : { height: "0px" } } > 
        <div className="text">{text.map((e) =>  <p>{e}</p> )}</div>
      </div>
    </li>
  );
};

export default AccordionItem