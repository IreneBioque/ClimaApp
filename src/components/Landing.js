import CityList from "./CityList";
import Form from "./Form";

const Landing = (props) => {
  return (
    <>
      <p>Esto es la landing Page de clima App</p>
      <Form
        handleSearchName={props.handleSearchName}
        valueSearchName={props.valueSearchName}
      />
      <CityList data={props.data}/>
    </>
  );
};

export default Landing;
