import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../graphql/queries/characters";

export const useCharacter = (page: number) => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: { page },
  });
  
  return {
    data,
    error,
    loading
  };
};