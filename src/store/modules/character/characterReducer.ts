import { ICharacterState } from "store/modules/character/interface";
import { Action, ActionType } from "store/modules/character/characterActionTypes";

const initialState = {
  list: [],
  nextPage: 1,
  loading: false, 
  error: null
}

export default function characterReducer(state: ICharacterState = initialState, action: Action):ICharacterState {
  switch(action.type) {
    case ActionType.GET_CHARACTERS_LOADING:
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
    case ActionType.GET_CHARACTERS_NEXT_PAGE:
      return {
        ...state,
        loading: false,
        nextPage: action.payload
      }
    case ActionType.GET_CHARACTERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload 
      }
    default: 
      return state;
  }
}