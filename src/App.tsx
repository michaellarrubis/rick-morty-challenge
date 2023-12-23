import { Box, Container } from "@mui/material"
import CardList from "components/CardList"

function App() {
  return (
    <Box
      width="100%"
      height="100%"
      pb={'50px'}
    >
      <Container sx={{ margin: '0 auto', display: 'block' }}>
        <CardList />
      </Container>
    </Box>
  )
}

export default App
