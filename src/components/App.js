import { useEffect, useState } from "react";
import { callToApiCity } from "../services/apiCity";
import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
function App() {
  const [city, setCity] = useState([]);
  const [searchName, setSearchName] = useState("");
  const handleSearchName = (value) => {
    setSearchName(value);
  };
  useEffect(() => {
    callToApiCity(searchName).then((response) => {
      setCity(response);
    });
  }, [searchName]);
  return (
    <>
      <Header />
      <Landing
        valueSearchName={searchName}
        handleSearchName={handleSearchName}
        data={city}
      />
      <Footer />
    </>
  );
}

export default App;
