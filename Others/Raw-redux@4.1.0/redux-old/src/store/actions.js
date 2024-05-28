export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increase = (value) => ({ type: INCREASE, payload: value });

export const decrease = (value) => ({ type: DECREASE, payload: value })
