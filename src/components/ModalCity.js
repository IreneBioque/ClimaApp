import { Modal } from "react-bootstrap";
import InfoWeather from "./InfoWeather";

const ModalCity = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.closeModal}
      id="modal"
      className="modalBackground"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="modal__ModalTitle">{props.data.name}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InfoWeather data={props.data} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalCity;
