import Square from "./components/Square";
import "./board.style.scss";
import { useState } from "react";

const Board = () => {
  const [boardArr, setBoardArr] = useState(Array(16).fill(0));

  const handleClick = (inx) => {
    console.log(inx, "index");
  };

  return (
    <div className="board-container">
      {boardArr.map((element, index) => (
        <Square
          onClick={() => handleClick(index)}
          value={element}
          index={index}
          arr={boardArr}
        />
      ))}
    </div>
  );
};

export default Board;
