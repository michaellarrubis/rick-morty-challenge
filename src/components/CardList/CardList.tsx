import { FC, useEffect } from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material"

import { ICharacter } from "../../store/modules/character/interface";
import { useCharacter } from "../../hooks/useCharacter";

const CardList:FC = () => {
  const { data } = useCharacter(1);

  console.log({ data });

  return (
    <Box pt={'50px'}>
      <Typography fontSize="30px" component="p">
        Rick & Morty Characters
      </Typography>
      <Box mt={'16px'} display={'flex'} gap={'20px'} flexWrap={'wrap'}>
        {data?.characters.results.map((character: ICharacter) => (
          <Card sx={{ width: '32%' }} key={character.id}>
            <CardMedia
              sx={{ height: 200 }}
              image={character.image}
              title={character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
};

export default CardList;
