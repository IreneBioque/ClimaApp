import FilterByName from "./Filters/FIlterByName";
import { FormGroup } from "@mui/material";


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
