// import allBooks from "../../fakeData/books.json";
const initialState = {
  discoverList: [],
  readingList: [],
  finishedList: [],
};
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_BOOKS": {
      const newState = {
        ...state,
        discoverList: action.payload,
      };
      return newState;
    }
    case "ADD_TO_READING_LIST": {
      const isAddBefore = state.readingList.find(b => b.id === action.payload.id);
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return isAddBefore ? state : newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter((b) => b.id !== action.payload.id),
      };
      return newState;
    }
    case "FINISHED_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter((b) => b.id !== action.payload.id),
        finishedList: [...state.finishedList, action.payload]
      };
      return newState;
    }
    default:
      return state;
  }
};
export default bookReducer;
