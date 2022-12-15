import { useState } from "react";
import "./App.css";
import Board from "./Component/Board/Board";
import Editable from "./Component/Editable/Editable";

function App() {
  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "Backlog",
      colorClass: "DarkGrey",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          desc: "Ghanshyam",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          desc: "Ghanshyam Vegad",
          date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Selected",
      colorClass: "#ffe44d",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 3",
          tasks: [],
          desc: "Ghanshyam",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 4",
          tasks: [],
          desc: "Ghanshyam Vegad",
          date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Running",
      colorClass: "#da3e3e",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 5",
          tasks: [],
          desc: "Ghanshyam",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 6",
          tasks: [],
          desc: "Ghanshyam Vegad",
          date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Evaluating",
      colorClass: "DodgerBlue",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 7",
          tasks: [],
          desc: "Ghanshyam",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 8",
          tasks: [],
          desc: "Ghanshyam Vegad",
          date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Live",
      colorClass: "#7acc00",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 9",
          tasks: [],
          desc: "Ghanshyam",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card ",
          tasks: [],
          desc: "Ghanshyam Vegad",
          date: "",
        },
      ],
    },
  ]);

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random() * 2,
      title,
      tasks: [],
      desc: "",
      date: "",
    };

    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoard = [...boards];
    tempBoard[index].cards.push(card);
    setBoards(tempBoard);
  };

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoard = [...boards];
    tempBoard[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoard);
  };

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: Date.now() + Math.random(),
        title,
        cards: [],
      },
    ]);
  };

  const removeBoards = (bid) => {
    const tempBoard = boards.filter((item) => item.id !== bid);
    setBoards(tempBoard);
  };

  const handleDraggEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;
    s_bIndex = boards.findIndex((item) => item.id === bid);
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex]?.cards?.findIndex((item) => item.id === cid);
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (s_bIndex < 0) return;

    t_cIndex = boards[t_bIndex]?.cards?.findIndex(
      (item) => item.id === target.cid
    );
    if (t_cIndex < 0) return;

    const tempBoard = [...boards];
    const tempCard = tempBoard[s_bIndex].cards[s_cIndex];
  

    tempBoard[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoard[t_bIndex].cards.splice(t_cIndex, 0, tempCard);
    // tempBoard[t_bIndex].cards.push(tempCard);
    console.log(tempBoard);
    setBoards(tempBoard);
    setTarget({
      cid: Date.now() + Math.random(),
      bid: Date.now() + Math.random() * 2,
    });
  };
  const handleDraggEnter = (cid, bid) => {
    if (target.cid === cid) return;
    setTarget({
      cid,
      bid,
    });
  };

  return (
    <div className="app">
      <div className="app_navbar">
        <h1>Kanban Board</h1>
      </div>
      <div className="app_outer">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCard}
              removeCard={removeCard}
              removeBoard={removeBoards}
              handleDraggEnd={handleDraggEnd}
              handleDraggEnter={handleDraggEnter}
              colorClass={item.colorClass}
            />
          ))}

          <div className="app_boards_board">
            <Editable
              displayClass="app_boards_add-board"
              text="App Board"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
