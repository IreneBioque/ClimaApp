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
      <ul>
        {" "}
        <li key={city.id}>
          <Card onClick={() => showModal()}>
            <CardContent>
              <Typography variant="h5" component="div">
                {city.name}
              </Typography>
              {/* <Button onClick={() => showModal()}>Ver el tiempo</Button> */}
            </CardContent>
          </Card>
        </li>
        <ModalCity show={show} closeModal={closeModal} data={city} />
      </ul>
    </>
  );
};

export default CityCard;
