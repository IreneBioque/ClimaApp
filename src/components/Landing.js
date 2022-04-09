import CityList from "./CityList";
import Form from "./Form";

const Landing = (props) => {
  return (
    <>
      <Form
        handleSearchName={props.handleSearchName}
        valueSearchName={props.valueSearchName}
      />
      <CityList data={props.data}/>
    </>
  );
};

export default Landing;
