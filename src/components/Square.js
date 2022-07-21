import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBoard } from "../store/board/board.action";
import { countQueens } from "../store/board/board.action";

const INITIAL_STATE = Array(16).fill("0");
const Square = ({ value, index, arr }) => {
  const [count, setCount] = useState(0);

  const store = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (store.count > 4) {
      console.log(store.count);
      dispatch(countQueens(0));
      dispatch(setCurrentBoard([...INITIAL_STATE]));
    }
  }, [store.count]);

  const handleClick = (ind) => {
    console.log("choose ind", ind);

    let newArr = store.board.filter((elm) => {
      return elm === "1";
    });

    dispatch(countQueens(newArr.length + 1));

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
