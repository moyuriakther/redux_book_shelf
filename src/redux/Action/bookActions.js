export function loadingBooks(payload) {
  return (dispatch, getState) => {
    fetch("https://mocki.io/v1/4c9e708d-0c69-4f3a-89dc-7746a657e97e")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
            type: "LOADING_BOOKS",
            payload: data.data
          });
        console.log(data.data);
      });
  };
}
export function addToReadingList(payload) {
  return {
    type: "ADD_TO_READING_LIST",
    payload,
  };
}
export function removeFromReadingList(payload) {
  return {
    type: "REMOVE_FROM_READING_LIST",
    payload,
  };
}
export function finishedList(payload) {
    return {
        type: "FINISHED_LIST",
        payload,
    }
}
