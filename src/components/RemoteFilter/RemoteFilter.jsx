import { useDispatch, useSelector } from "react-redux";
import { setRemote } from "../../slices/filterSlice";
import "./RemoteFilter.css";

function RemoteFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  function handleRemoteChange(e) {
    console.log(e.target.value);
    dispatch(setRemote(e.target.value));
  }

  return (
    <div>
      <select
        className="remoteFilter"
        value={filters.remote}
        onChange={(e) => handleRemoteChange(e)}
      >
        <option value="">Select Onsite/Remote</option>
        <option value="remote">Remote</option>
        <option value="onsite">In-Office</option>
      </select>
    </div>
  );
}

export default RemoteFilter;
