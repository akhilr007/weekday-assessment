import CompanyNameFilter from "../CompanyNameFilter/CompanyNameFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import RemoteFilter from "../RemoteFilter/RemoteFilter";

function FilterCard() {
  return (
    <div>
      <LocationFilter />
      <RemoteFilter />
      <CompanyNameFilter />
    </div>
  );
}

export default FilterCard;
