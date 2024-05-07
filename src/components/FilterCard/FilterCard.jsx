import CompanyNameFilter from "../CompanyNameFilter/CompanyNameFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import MinBasePayFilter from "../MinBasePayFilter/MinBasePayFilter";
import MinExperienceFilter from "../MinExperienceFilter/MinExperienceFilter";
import RemoteFilter from "../RemoteFilter/RemoteFilter";
import RoleFilter from "../RoleFilter/RoleFilter";
import TechStackFilter from "../TechStackFilter/TechStackFilter";

function FilterCard() {
  return (
    <div>
      <RoleFilter />
      <MinBasePayFilter />
      <MinExperienceFilter />
      <LocationFilter />
      <RemoteFilter />
      <TechStackFilter />
      <CompanyNameFilter />
    </div>
  );
}

export default FilterCard;
