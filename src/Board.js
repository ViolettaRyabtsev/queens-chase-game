import Square from "./components/Square";
import "./board.style.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentBoard } from "./store/board/board.action";
const Board = () => {
  const store = useSelector((state) => state);

  console.log(store.count);

  return (
    <>
      <div className="board-container">
        {store.board.map((element, index) => (
          <Square value={element} index={index} />
        ))}
      </div>
      <h3>{store.count}</h3>
    </>
  );
};

export default Board;
