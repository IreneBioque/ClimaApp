import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import InfoWeather from "./InfoWeather";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCity = (props) => {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.show}
        onClose={props.closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.show}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h1 className="modal__ModalTitle">{props.data.name}</h1>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <InfoWeather data={props.data} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalCity;
