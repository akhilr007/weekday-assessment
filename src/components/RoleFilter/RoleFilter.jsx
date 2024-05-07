import { useDispatch, useSelector } from "react-redux";
import "./RoleFilter.css";
import { setRole } from "../../slices/filterSlice";

function RoleFilter() {
  const options = [
    "frontend",
    "backend",
    "fullstack",
    "ios",
    "android",
    "tech lead",
  ];

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  function handleRoleChange(e) {
    dispatch(setRole(e.target.value));
  }

  return (
    <div>
      <select className="role" value={filters.role} onChange={handleRoleChange}>
        <option value="">All Roles</option>
        {options.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RoleFilter;
