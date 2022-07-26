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
    let rows = {};
    let col = {};

    for (let i = 0; i < arrMatrix.length; i++) {
      let row = arrMatrix[i];
      rows[i] = row;
    }

    col[0] = scanColumBoard(arrMatrix, 0);
    col[1] = scanColumBoard(arrMatrix, 1);
    col[2] = scanColumBoard(arrMatrix, 2);
    col[3] = scanColumBoard(arrMatrix, 3);

    console.log(col);

    const boolean = findDiognal(rows);
    console.log(boolean);
  }, [arrMatrix]);

  // iterate thr matrix for value in column/ helper function
  const scanColumBoard = (matrix, col) => {
    var column = [];
    for (var i = 0; i < matrix.length; i++) {
      column.push(matrix[i][col]);
    }
    return column;
  };

  const findDiognal = (object) => {
    let leftIndex = 0;

    let count = 0;

    for (let key in object) {
      let rightIndex = object[key].length - 1;
      console.log(rightIndex);
      if (object[key][leftIndex] === "1") {
        console.log(count, "count");
        key++;
        leftIndex++;
        count++;
      }
      if (object[key][rightIndex] === "1") {
        key++;
        rightIndex--;
        count++;
      }

      if (count > 2) {
        return false;
      }
    }
  };

  return (
    <>
      <div className="board-container">
        {store.board.map((element, index) => (
          <Square value={element} index={index} />
        ))}
      </div>
      <h3>{store.count}</h3>
      <div> </div>
    </>
  );
};

export default Board;
