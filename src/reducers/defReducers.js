export default (state = {}, action) => {
  switch (action.type) {
    case "DATA_OF_WORD":
      return action.payload;
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};
