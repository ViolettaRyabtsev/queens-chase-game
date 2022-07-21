export const CountQueensReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case "COUNT_QUEENS":
      return payload;
    default:
      return state;
  }
};
