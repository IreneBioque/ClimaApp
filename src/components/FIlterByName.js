import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";

const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  return (
    <>
      <InputLabel htmlFor="city">
        Buscar ciudad
      </InputLabel>
      <TextField
        className="form__input"
        name="city"
        id="city"
        placeholder="Buscar ciudad"
        value={props.valueSearchName}
        onChange={handleInputChange}
      />
    </>
  );
};
FilterByName.defaultProps = {
  inputType: "text",
};
FilterByName.propTypes = {
  inputValue: PropTypes.string,
  handleSearchName: PropTypes.func.isRequired,
};
export default FilterByName;
