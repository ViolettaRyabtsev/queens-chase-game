const Square = ({ value, index, arr }) => {
  const handleClick = (ind) => {
    console.log("choose ind", ind);
    //redux
  };

  return <button onClick={() => handleClick(index)}>{value}</button>;
};

export default Square;
