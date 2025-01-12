import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = () => {
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
            {[
              "Home",
              "pokedex",
              "videogames",
              "gcc games",
              "TV Pokemons",
              "Play! Pokemon",
              "News",
            ].map((item, index) => (
              <ListItem
                sx={{
                  color: "gray",
                  cursor: "pointer",
                  paddingY: "35px",
                  //   borderBottom: "3px solid white",
                  boxSizing: "border-box",
                  transition: "border-color 0.3s",
                  ":hover": {
                    color: "red",
                    borderBottom: "3px solid red",
                  },
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                }}
                key={index}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
