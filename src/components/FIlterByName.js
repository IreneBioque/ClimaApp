import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  return (
    <>
      <label htmlFor="name" className="form__label">
        Buscar ciudad
      </label>
      <input
        className="form__input"
        name="name"
        id="name"
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
