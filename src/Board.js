import Square from "./components/Square";
import "./board.style.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentBoard } from "./store/board/board.action";
const Board = () => {
  const [count, setCount] = useState(0);
  const store = useSelector((state) => state);

  console.log(store);

  useEffect(() => {
    let newArr = store.board.filter((elem) => elem === "1");
    setCount(newArr.length);
  }, [store.board]);

  return (
    <>
      <div className="board-container">
        {store.board.map((element, index) => (
          <Square value={element} index={index} />
        ))}
      </div>
      <h3>{count}</h3>
    </>
  );
};

export default Board;
