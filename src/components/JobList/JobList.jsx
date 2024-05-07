import { Grid } from "@mui/material";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard/JobCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import FilterCard from "../FilterCard/FilterCard";
import { useSelector } from "react-redux";

function JobList() {
  const { jobs, loading, loadMore } = useJobs();
  useInfiniteScroll(loadMore);

  const companyNameFilter = useSelector((state) => state.filters.companyName);
  const filteredJobs = jobs.filter(
    (job) => job.companyName.toLowerCase() === companyNameFilter.toLowerCase()
  );
  console.log(filteredJobs);

  return (
    <>
      <FilterCard />
      <Grid container spacing={2}>
        {loading && <p> Loading jobs</p>}
        {filteredJobs.length > 0
          ? filteredJobs.map((job, index) => (
              <JobCard job={job} key={`${job.jdUid}-${index}`} />
            ))
          : jobs.length > 0 &&
            jobs.map((job, index) => (
              <JobCard job={job} key={`${job.jdUid}-${index}`} />
            ))}
        <div id="bottomObserver" style={{ height: "10px" }} />
      </Grid>
    </>
  );
}

export default JobList;
