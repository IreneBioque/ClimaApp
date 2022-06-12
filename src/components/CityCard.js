import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ModalCity from "./ModalCity";

const CityCard = (props) => {
  const { city } = props;
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      {" "}
      <li key={city.id} role="Cardcity" onClick={() => showModal()}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {city.name}
            </Typography>
            <img
              src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${city.lng},${city.lat},13,20/350x350?access_token=${process.env.REACT_APP_API_CITY_KEY}`}
              alt="image_city"
            />
            <Button
              onClick={() => showModal()}
              role={"buttonShowModal"}
              data-testid={city.id}
            >
              Ver el tiempo
            </Button>
          </CardContent>
        </Card>
      </li>
      <ModalCity
        show={show}
        onClose={closeModal}
        data={city}
        name={city.name}
      />
    </>
  );
};

export default CityCard;
