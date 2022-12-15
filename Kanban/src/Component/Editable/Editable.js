import React, { useState } from "react";
import { X } from "react-feather";
import "./Editable.css";

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputvalue] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (props.onSubmit) props.onSubmit(inputValue);
    setInputvalue("");
    setShowEdit(false);
  };

  return (
    <div className="editable">
      {showEdit ? (
        <form className="editable_edit" onSubmit={submitHandler}>
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttontext || "ADD"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p className="editable_display" onClick={() => setShowEdit(true)}>
          {props.text || "Add Card"}
        </p>
      )}
    </div>
  );
};
export default Editable;
