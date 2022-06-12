import { FunctionComponent } from "react";
import CityList from "./CardList";
import Form from "./Form";

const Landing = (props) => {
  return (
    <>
      <Form
        handleSearchName={props.handleSearchName}
        valueSearchName={props.valueSearchName}
        setCity={props.setCity}
      />
      <CityList data={props.data} />
    </>
  );
};

export default Landing;
