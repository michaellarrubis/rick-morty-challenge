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
          Species: {character.species} <br/>
          Origin: {character.origin?.name} <br/>
          Status: {character.status} <br/>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardItem