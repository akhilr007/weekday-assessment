import CompanyNameFilter from "../CompanyNameFilter/CompanyNameFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import MinBasePayFilter from "../MinBasePayFilter/MinBasePayFilter";
import MinExperienceFilter from "../MinExperienceFilter/MinExperienceFilter";
import RemoteFilter from "../RemoteFilter/RemoteFilter";
import RoleFilter from "../RoleFilter/RoleFilter";
import TechStackFilter from "../TechStackFilter/TechStackFilter";
import "./FilterCard.css";

function FilterCard() {
  return (
    <div className="filterCard">
      <div className="filterItem">
        <RoleFilter />
      </div>
      <div className="filterItem">
        <MinBasePayFilter />
      </div>
      <div className="filterItem">
        <MinExperienceFilter />
      </div>
      <div className="filterItem">
        <LocationFilter />
      </div>
      <div className="filterItem">
        <RemoteFilter />
      </div>
      <div className="filterItem">
        <TechStackFilter />
      </div>
      <div className="filterItem">
        <CompanyNameFilter />
      </div>
    </div>
  );
}

export default FilterCard;
