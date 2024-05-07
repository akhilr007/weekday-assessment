import CompanyNameFilter from "../CompanyNameFilter/CompanyNameFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import MinExperienceFilter from "../MinExperienceFilter/MinExperienceFilter";
import RemoteFilter from "../RemoteFilter/RemoteFilter";

function FilterCard() {
  return (
    <div>
      <MinExperienceFilter />
      <LocationFilter />
      <RemoteFilter />
      <CompanyNameFilter />
    </div>
  );
}

export default FilterCard;
