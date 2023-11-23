import { Dispatch } from "redux";
import { ActionType, Action } from "store/modules/character/characterActionTypes";
import { ICharacter } from "store/modules/character/interface";

import { CHARACTERS_QUERY } from "gql/queries/characters";
import gqlClient from "gql/client";

export const setCharacters = (data: ICharacter[]) => {
  return async (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.GET_CHARACTERS_SUCCESS,
      payload: data  
    });
  }
}

export const setNextPage = (data: number) => {
  return async (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.GET_CHARACTERS_NEXT_PAGE,
      payload: data  
    });
  }
}

export const getCharacters = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.GET_CHARACTERS_LOADING,
      payload: true
    });

    return gqlClient
      .query({
        query: CHARACTERS_QUERY,
        variables: {
          page
        }
      })
      .then(({ data }) => {
        return data.characters;
      })
      .catch(error => {
        dispatch({
          type: ActionType.GET_CHARACTERS_FAILED,
          payload: JSON.stringify(error.message)
        });
      })
      .finally(() => {
        dispatch({
          type: ActionType.GET_CHARACTERS_LOADING,
          payload: false
        });
      });
  } 
}