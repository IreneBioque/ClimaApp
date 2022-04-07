import CityCard from "./CityCard";

const CityList = (props) => {
  const list = props.data.map((city) => {
    return <CityCard city={city} />;
  });

  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default CityList;
