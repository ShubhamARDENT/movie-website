import {
  AppBar,
  Container,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router";



const NavBar = () => {

  const navigate = useNavigate()
  const menuItems = [
    {
      name: "Home", image: './images/pokeball.png', path: '/'
    },
    {
      name: "pokedex", image: './images/game.png', path: '/pokedex'
    },
    {
      name: "videogames", image: './images/game2.png', path: '/videogames'
    },
    {
      name: "gcc games", image: './images/pokeballs.png', path: '/gccgames'
    },
    {
      name: "TV Pokemons", image: './images/pokemon-go.png', path: '/tvpokemons'
    },
    {
      name: "Play! Pokemon", image: './images/pokeball.png', path: '/playpokemon'
    },
    {
      name: "News", image: './images/pokecoin.png', path: '/news'
    },
  ]

  // const handleNavigation = (path: string) => {
  //   navigate(path)
  //   console.log(path)
  // }

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
                onClick={() => navigate(item.path)}
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
