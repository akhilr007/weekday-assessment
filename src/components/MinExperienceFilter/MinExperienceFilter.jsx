import { useDispatch, useSelector } from "react-redux";
import { setMinExperience } from "../../slices/filterSlice";
import "./MinExperienceFilter.css";

function MinExperienceFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  function handleMinExperienceChange(e) {
    dispatch(setMinExperience(e.target.value));
  }

  return (
    <div>
      <select
        className="minExp"
        value={filters.minExperience}
        onChange={(e) => handleMinExperienceChange(e)}
      >
        <option value="">Select Min Experience</option>
        {[...Array(10).keys()].map((year) => (
          <option key={year} value={year + 1}>
            {year + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MinExperienceFilter;
