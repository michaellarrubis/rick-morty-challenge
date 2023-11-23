import { ICharacter } from "store/modules/character/interface";

export enum ActionType {
  GET_CHARACTERS_LOADING = "GET_CHARACTERS_LOADING",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_FAILED = "GET_CHARACTERS_FAILED",
  GET_CHARACTERS_NEXT_PAGE = "GET_CHARACTERS_NEXT_PAGE",
}

interface actionPending {
  type: ActionType.GET_CHARACTERS_LOADING;
  payload: boolean
}

interface actionSuccess {
  type: ActionType.GET_CHARACTERS_SUCCESS;
  payload: ICharacter[];
}

interface actionFail {
  type: ActionType.GET_CHARACTERS_FAILED;
  payload: string ;
}

interface actionNextPage {
  type: ActionType.GET_CHARACTERS_NEXT_PAGE;
  payload: number ;
}

export type Action = actionPending | actionSuccess | actionFail | actionNextPage;