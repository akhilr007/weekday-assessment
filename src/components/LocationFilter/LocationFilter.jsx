import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../slices/filterSlice";
import "./LocationFilter.css";
import { useState, useEffect } from "react";

function LocationFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLocation(inputValue));
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, dispatch]);

  function handleLocationChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input
        className="locationFilter"
        placeholder="Enter location"
        type="text"
        value={inputValue}
        onChange={(e) => handleLocationChange(e)}
      />
    </div>
  );
}

export default LocationFilter;
