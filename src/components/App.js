import { useEffect, useState } from "react";
import { callToApiCity } from "../services/apiCity";
import Footer from "./Footer/index";
import Header from "./Header/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import Animation from "./Animation";
import CityCard from "./CityCard";
import Form from "./Form";
import { StyledCard, StyledList } from "./styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [city, setCity] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [check, setcheck] = useState(true);
  const handleChange = (event) => {
    setcheck(event.target.checked);
    if (!check) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };
  const changeTheme = () => {
    setTheme(darkTheme);
  };

  const handleSearchName = (value) => {
    setSearchName(value);
  };
 useEffect(() => {
  const  asyncCall = async () => {
   callToApiCity(searchName).then((response) => {
     setCity(response);
   });
  }
asyncCall();
 }, [searchName]);
   const list = city.map((city) => {
     return <CityCard city={city} key={city.id} />;
   });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header
          changeTheme={changeTheme}
          theme={theme}
          lightTheme={lightTheme}
          handleChange={handleChange}
          check={check}
        />
        <main style={{ height: city ? "" : "85vh" }}>
          <Form
            handleSearchName={handleSearchName}
            valueSearchName={searchName}
            setCity={setCity}
          />
          <StyledList>
            {city.length !== 0 ? (
              <ul className="cityList">{list}</ul>
            ) : (
              <Card>
                <StyledCard>
                  <Typography variant="h5">Bienvenido a ClimaApp</Typography>
                  <Typography variant="body1">
                    Para empezar a usar esta aplicación escriba un nombre de la
                    ciudad de la que quiere conocer el tiempo
                  </Typography>
                </StyledCard>
                <Animation />
              </Card>
            )}
          </StyledList>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
