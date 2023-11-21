import { ICharacter } from "./interface";

export enum ActionType {
  GET_CHARACTERS_PENDING = "GET_CHARACTERS_PENDING",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_FAIL = "GET_CHARACTERS_FAIL"
}

interface actionPending {
  type: ActionType.GET_CHARACTERS_PENDING;
  payload: boolean
}

interface actionSuccess {
  type: ActionType.GET_CHARACTERS_SUCCESS;
  payload: ICharacter[];
}

interface actionFail {
  type: ActionType.GET_CHARACTERS_FAIL;
  payload: string ;
}

export type Action = actionPending | actionSuccess | actionFail;