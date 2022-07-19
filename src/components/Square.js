import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBoard } from "../store/board/board.action";

const Square = ({ value, index, arr }) => {
  const [count, setCount] = useState(0);

  const store = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = (ind) => {
    console.log("choose ind", ind);

    //redux
    dispatch(
      setCurrentBoard([
        ...store.board.slice(0, ind),
        "1",
        ...store.board.slice(ind + 1),
      ])
    );
  };

  return (
    <>
      <button onClick={() => handleClick(index)}>{value}</button>
    </>
  );
};

export default Square;
