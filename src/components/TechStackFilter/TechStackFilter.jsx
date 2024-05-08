import { useDispatch, useSelector } from "react-redux";
import { setTechStack } from "../../slices/filterSlice";
import "./TechStackFilter.css";

function TechStackFilter() {
  const options = [
    "frontend",
    "backend",
    "fullstack",
    "ios",
    "android",
    "golang",
    "java",
    "c++",
    "javascript",
    "typescript",
  ];

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  function handleRoleChange(e) {
    dispatch(setTechStack(e.target.value));
  }

  return (
    <div>
      <select
        className="techStack"
        value={filters.techStack}
        onChange={handleRoleChange}
      >
        <option value="">Tech Stack</option>
        {options.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TechStackFilter;
