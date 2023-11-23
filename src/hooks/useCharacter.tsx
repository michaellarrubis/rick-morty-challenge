import { useAppDispatch, useAppSelector } from "./store";
import { ICharacter } from "store/modules/character/interface";
import { getCharacters, setCharacters, setNextPage } from "store/modules/character/characterActions";

export const useCharacter = () => {
  const dispatch = useAppDispatch();
  const { list, loading, nextPage } = useAppSelector((state) => state.characters)

  const _getCharacters = async (page: number) => {
    // @ts-ignore
    return dispatch(getCharacters(page));
  }

  const _setCharacters = async(characters: ICharacter[]) => {
    // @ts-ignore
    return dispatch(setCharacters(characters));
  }

  const _setNextPage = async(page: number) => {
    // @ts-ignore
    return dispatch(setNextPage(page));
  }
  
  return {
    _getCharacters,
    _setCharacters,
    _setNextPage,

    nextPage,
    characters: list,
    isLoading: loading
  };
};