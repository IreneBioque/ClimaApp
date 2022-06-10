import { Card, Typography } from "@mui/material";
import CityCard from "../CityCard";
import Animation from "./Animation";
import { StyledList, StyledCard } from "./styles";

const CityList = (props) => {
  const list = props.data.map((city) => {
    return <CityCard city={city} key={city.id} />;
  });

  return (
    <StyledList>
      {props.data.length !== 0 ? (
        <ul className="cityList">{list}</ul>
      ) : (
        <Card>
          <StyledCard>
            <Typography variant="h5">Bienvenido a ClimaApp</Typography>
            <Typography variant="body1">
              Para empezar a usar esta aplicación escriba un nombre de la ciudad
              de la que quiere conocer el tiempo
            </Typography>
          </StyledCard>
          <Animation />
        </Card>
      )}
    </StyledList>
  );
};

export default CityList;
