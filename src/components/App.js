import { useEffect, useState } from "react";
import { callToApiCity } from "../services/apiCity";
import Footer from "./Footer/index";
import Header from "./Header/index";
import Landing from "./Landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
          <Landing
            valueSearchName={searchName}
            handleSearchName={handleSearchName}
            data={city}
            setCity={setCity}
          />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
