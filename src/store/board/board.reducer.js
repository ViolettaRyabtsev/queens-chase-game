const INITIAL_STATE = Array(16).fill(0);

export const BoardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_BOARD":
      return payload;
    default:
      return state;
  }
};
