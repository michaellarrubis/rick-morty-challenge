import { FC, useEffect } from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import CardItem from "components/CardItem/CardItem";

import { useCharacter } from "hooks/useCharacter";
import { ICharacter } from "store/modules/character/interface";

const CardList:FC = () => {
  const {
    characters, 
    nextPage,
    isLoading,
    _setNextPage,
    _getCharacters, 
    _setCharacters,
} = useCharacter();

  useEffect(() => {
    onInitialRender();
  }, []);

  const onInitialRender = async () => {
    if (!nextPage) return;
    const data = await _getCharacters(nextPage);
    // @ts-ignore
    _setCharacters(data.results);
    // @ts-ignore
    _setNextPage(data.info.next);
  }

  const onLoadMore = async () => {
    if (!nextPage) return;
    const data = await _getCharacters(nextPage);
    // @ts-ignore
    const newCharacterList = [...characters, ...data.results];
    _setCharacters(newCharacterList);
    // @ts-ignore
    _setNextPage(data.info.next);
  }

  return (
    <Box pt={'50px'}>
      <Typography fontSize="30px" component="p">
        Rick & Morty Characters
      </Typography>
      <Box mt={'16px'} display={'flex'} gap={'20px'} flexWrap={'wrap'}>
        {characters?.length > 0 && (
          characters.map((character: ICharacter) => (
            <CardItem key={character.id} {...character} />
          ))
        )}
      </Box>
      {isLoading && (
        <Box display={'flex'} justifyContent={'center'} my={'10px'}>
          <CircularProgress color="info" />
        </Box>
      )}
      
      <Box display={'flex'} justifyContent={'center'} my={'50px'}>
        <Button variant="contained" onClick={() => onLoadMore()} disabled={!(!isLoading && nextPage)}>MORE</Button>
      </Box>
    </Box>
  )
};

export default CardList;
