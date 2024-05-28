export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increase = (value) => {
  return (dispatch) => {
    dispatch({ type: INCREASE, payload: value });
  };
};

export const decrease = (value) => {
  return (dispatch) => {
    dispatch({ type: DECREASE, payload: value });
  };
};
