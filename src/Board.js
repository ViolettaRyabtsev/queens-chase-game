import Square from "./components/Square";
import "./board.style.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentBoard } from "./store/board/board.action";
import { GiCoinsPile } from "react-icons/gi";

const Board = () => {
  let [localBoard, setLocalBoard] = useState([]);
  let [arrMatrix, setMatrix] = useState([]);

  const store = useSelector((state) => state);

  useEffect(() => {
    setLocalBoard(store.board);
    console.log(localBoard, "local");
    let matrix = [];
    for (let i = 0; i < localBoard.length; i++) {
      let part = localBoard.slice(0, 4);
      console.log(part);
      let newArr = localBoard.slice(4);
      localBoard = newArr;
      matrix.push(part);
    }

    setMatrix(matrix);
  }, [localBoard, store.board]);

  useEffect(() => {
    let map = {};

    console.log(arrMatrix, "matrix");

    for (let i = 0; i < arrMatrix.length; i++) {
      let row = arrMatrix[i];
      map[i] = row;
    }

    function getCol(matrix, col) {
      var column = [];
      for (var i = 0; i < matrix.length; i++) {
        column.push(matrix[i][col]);
      }
      return column; // return column data..
    }

    getCol(arrMatrix, 0);

    console.log(getCol(arrMatrix, 0));
  }, [arrMatrix]);

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
