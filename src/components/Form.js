import FilterByName from "./FIlterByName";

const Form = (props) => {
   const handleFormSubmit = (ev) => {
     ev.preventDefault();
   };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <FilterByName
          handleSearchName={props.handleSearchName}
          valueSearchName={props.valueSearchName}
        />
      </form>
    </>
  );
};

export default Form;
