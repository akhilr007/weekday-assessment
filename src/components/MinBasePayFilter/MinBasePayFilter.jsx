import { useDispatch, useSelector } from "react-redux";
import { setMinBasePay } from "../../slices/filterSlice";
import "./MinBasePayFilter.css";

function MinBasePayFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  function handleMinBasePay(e) {
    dispatch(setMinBasePay(e.target.value));
  }

  return (
    <div>
      <select
        className="minBasePay"
        value={filters.minBasePay}
        onChange={(e) => handleMinBasePay(e)}
      >
        <option value="">Select Min Base Pay</option>
        {[...Array(8).keys()].map((val) => (
          <option key={val} value={val * 10}>
            {val * 10 + "K"}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MinBasePayFilter;
