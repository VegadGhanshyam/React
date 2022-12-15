import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Dropdown from "../DropDown/DropDown";
import Editable from "../Editable/Editable";
import "./Board.css";

const Board = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  // console.log("props--", props.colorClass);
  return (
    <div className={`board`} style={{ backgroundColor: `${props.colorClass}` }}>
      <div className="board_header">
        <p className="board_header_title">{props.board.title}</p>

        <div
          className="board_header_title_more"
          onClick={(event) => {
            event.stopPropagation();
            setShowDropDown(true);
          }}
        >
          <MoreHorizontal />
          {showDropDown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropDown(false)}
            >
              <p onClick={() => props.removeBoard(props.board.id)}>
                Delete Board
              </p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="board_cards custom-scroll">
        {props.board.cards.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board.id}
            handleDraggEnd={props.handleDraggEnd}
            handleDraggEnter={props.handleDraggEnter}
          />
        ))}

        <Editable
          className="board_cards_add"
          onSubmit={(value) => props.addCard(value, props.board.id)}
        />
      </div>
    </div>
  );
};
export default Board;
