import PropTypes from "prop-types";
import * as React from "react";
import { StyledInput } from "./styles";

const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  return (
      <StyledInput
        className="form__input"
        name="city"
        id="city"
        label="Buscar ciudad"
        placeholder="Buscar ciudad"
        value={props.valueSearchName}
        onChange={handleInputChange}
      />
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
