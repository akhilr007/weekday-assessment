import CompanyNameFilter from "../CompanyNameFilter/CompanyNameFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import MinBasePayFilter from "../MinBasePayFilter/MinBasePayFilter";
import MinExperienceFilter from "../MinExperienceFilter/MinExperienceFilter";
import RemoteFilter from "../RemoteFilter/RemoteFilter";

function FilterCard() {
  return (
    <div>
      <MinBasePayFilter />
      <MinExperienceFilter />
      <LocationFilter />
      <RemoteFilter />
      <CompanyNameFilter />
    </div>
  );
}

export default FilterCard;
