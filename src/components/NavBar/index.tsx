import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";



const NavBar = () => {


  const menuItems = [{
    name: "Home", image: './images/pokeball.png'
  },
  {
    name: "pokedex", image: './images/game.png'
  },
  {
    name: "videogames", image: './images/game2.png'
  },
  {
    name: "gcc games", image: './images/pokeballs.png'
  },

  {
    name: "TV Pokemons", image: './images/pokemon-go.png'
  },
  {
    name: "Play! Pokemon", image: './images/pokeball.png'
  },
  {
    name: "News", image: './images/pokecoin.png'
  },

  ]

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginY: "30px" }}
    >
      <AppBar
        position="static"
        sx={{
          background: "white",
          color: "gray",
          borderRadius: "10px",
        }}
      >
        <Toolbar>
          <List
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
              },
              padding: 0,
              width: "100%",
              color: "inherit",
            }}
          >
            {menuItems.map((item, index) => (
              <ListItem
                sx={{
                  color: "gray",
                  cursor: "pointer",
                  paddingY: "35px",
                  //   borderBottom: "3px solid white",
                  boxSizing: "border-box",
                  transition: "border-color 0.3s",
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  display: 'flex',
                  alignItems: 'center',

                  ":hover": {
                    color: "red",
                    borderBottom: "3px solid red",
                  },
                }}

                key={index}
              >
                <div className="flex justify-between items-center">

                  <img src={item.image} alt="pokeball " className="w-[100%] h-[40px] object-contain"
                  />

                  <div className="ml-2">
                    {item.name}
                  </div>
                </div>



              </ListItem>
            ))}
          </List>

        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
