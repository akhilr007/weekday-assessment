import { useDispatch, useSelector } from "react-redux";
import { setCompanyName } from "../../slices/filterSlice";
import "./CompanyNameFilter.css";
import { useState, useEffect } from "react";

function CompanyNameFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setCompanyName(inputValue));
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, dispatch]);

  function handleCompanyNameChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      {filters.companyName.length > 0 ? (
        <div>
          <label>Company Name</label>
        </div>
      ) : (
        ""
      )}
      <input
        className="companyNameFilter"
        placeholder="Enter company Name"
        type="text"
        value={inputValue}
        onChange={(e) => handleCompanyNameChange(e)}
      />
    </div>
  );
}

export default CompanyNameFilter;
