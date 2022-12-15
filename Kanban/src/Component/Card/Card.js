import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import "./Card.css";
import Dropdown from "../DropDown/DropDown";

const Card = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => props.handleDraggEnd(props.card.id, props.boardId)}
      onDragEnter={() => props.handleDraggEnter(props.card.id, props.boardId)}
    >
      <div className="card_top">
        <div className="card_title">{props.card.title}</div>
        <div
          className="card_top_more"
          onClick={(event) => {
            event.stopPropagation();
            setShowDropdown(true);
          }}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeCard(props.card.id, props.boardId)}>
                Delete Card
              </p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="card_footer">
        {props.card.date && (
          <p>
            <Clock /> {props.card.date}
          </p>
        )}

        <p>
          <CheckSquare /> 1/4
        </p>
      </div>
    </div>
  );
};
export default Card;
