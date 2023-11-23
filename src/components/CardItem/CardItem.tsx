import { FC } from "react"
import { Typography, Card, CardMedia, CardContent } from "@mui/material"
import { ICharacter } from "store/modules/character/interface"

const CardItem:FC<ICharacter> = (character: ICharacter) => {
  return (
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
  )
}

export default CardItem