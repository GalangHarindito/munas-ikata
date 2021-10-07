const Reducer = (state, action) => {
  switch (action.type) {
      case 'CANDIDATE':
          return {
              ...state,
              candidate: action.payload
          };
      default:
          return state;
  }
};

export default Reducer;