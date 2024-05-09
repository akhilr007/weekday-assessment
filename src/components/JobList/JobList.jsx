import { CircularProgress, Grid } from "@mui/material";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard/JobCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import FilterCard from "../FilterCard/FilterCard";
import { useSelector } from "react-redux";
import useMemoizedFilter from "../../hooks/useMemoizedFilter";
import SearchIcon from "../SearchIcon/SearchIcon";
import { useEffect, useState } from "react";

function JobList() {
  const { jobs, loading, loadMore } = useJobs();
  useInfiniteScroll(loadMore);

  const filters = useSelector((state) => state.filters);
  // const filteredJobs = useMemoizedFilter(jobs, filters);

  const [filteredJobs, setFilteredJobs] = useState([]);

  const newFilteredJobs = useMemoizedFilter(jobs, filters, filteredJobs);

  useEffect(() => {
    setFilteredJobs(newFilteredJobs);
  }, [newFilteredJobs]);

  return (
    <>
      <SearchIcon filteredJobs={filteredJobs} jobs={jobs} />
      <FilterCard />
      <Grid container spacing={2}>
        {loading && <CircularProgress />}
        {filteredJobs.length > 0 &&
          filteredJobs.map((job, index) => (
            <JobCard job={job} key={`${job.jdUid}-${index}`} />
          ))}
        <div id="bottomObserver" style={{ height: "10px" }} />
      </Grid>
    </>
  );
}

export default JobList;
