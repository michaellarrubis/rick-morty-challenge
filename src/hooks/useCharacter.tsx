import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../store/modules/character/characterActions";

import { CHARACTERS_QUERY } from "../graphql/queries/characters";
import { RootStateType } from "../store";

export const useCharacter = () => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: { page: 1 },
  });

  const dispatch = useDispatch();
  const { characters } = useSelector((state: RootStateType) => state);

  const getCharacters = (page: number) => {

    console.log({ data, loading, error });

    // if (loading) {
    //   return <p>Loading...</p>;
    // }

    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // }
    return { data: 'from useHooks' };
  };

  return {
    characters,
    getCharacters
  };
};