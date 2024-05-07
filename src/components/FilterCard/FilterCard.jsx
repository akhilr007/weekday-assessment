import CompanyNameFilter from "../CompanyNameFilter/CompanyNameFilter";
import RemoteFilter from "../RemoteFilter/RemoteFilter";

function FilterCard() {
  return (
    <div>
      <RemoteFilter />
      <CompanyNameFilter />
    </div>
  );
}

export default FilterCard;
