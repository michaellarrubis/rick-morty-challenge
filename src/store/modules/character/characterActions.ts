import { Dispatch } from "redux";
import { ActionType, Action } from "./characterActionTypes";
import { ICharacter } from "./interface";

export const setCharacters = (data: ICharacter[]) => {
  return async (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.GET_CHARACTERS_SUCCESS,
      payload: data  
    });
  }
}

export const setCharactersPending = (data: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.GET_CHARACTERS_PENDING,
      payload: data
    });
  }
}

export const setCharactersFailed = (data: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.GET_CHARACTERS_FAIL,
      payload: data
    });
  }
}