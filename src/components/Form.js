import { FormGroup } from "@mui/material";
import FilterByName from "./Filters/FIlterByName";

const Form = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <FormGroup onSubmit={handleFormSubmit}>
      <FilterByName
        handleSearchName={props.handleSearchName}
        valueSearchName={props.valueSearchName}
      />
    </FormGroup>
  );
};

export default Form;
