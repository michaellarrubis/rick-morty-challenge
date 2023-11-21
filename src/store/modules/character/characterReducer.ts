import { ICharacterState } from "./interface";
import { Action, ActionType } from "./characterActionTypes";

const initialState = {
  list: [],
  loading: false, 
  error: null
}

export default function commentReducer(state: ICharacterState = initialState, action: Action):ICharacterState {
  switch(action.type) {
    case ActionType.GET_CHARACTERS_PENDING:
      return {
        ...state,
        loading: action.payload 
      } 
    case ActionType.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      }
    case ActionType.GET_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload 
      }
    default: 
      return state;
  }
}