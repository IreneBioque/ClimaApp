import { useState } from "react";
import ModalCity from "./ModalCity";

const CityCard = (props) => {
  const {city} = props;
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <ul>
        {" "}
        <li key={city.id} onClick={() => showModal()}>
          {city.name}
        </li>
        <ModalCity show={show} closeModal={closeModal} data={city} />
      </ul>
    </>
  );
};

export default CityCard;
