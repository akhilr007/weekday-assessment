import { Grid } from "@mui/material";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard/JobCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import FilterCard from "../FilterCard/FilterCard";
import { useSelector } from "react-redux";

function JobList() {
  const { jobs, loading, loadMore } = useJobs();
  console.log(jobs);
  useInfiniteScroll(loadMore);

  const companyNameFilter = useSelector((state) => state.filters.companyName);
  const remoteFilter = useSelector((state) => state.filters.remote);
  const locationFilter = useSelector((state) => state.filters.location);

  const filteredJobs = jobs.filter((job) => {
    const companyNameMatches =
      companyNameFilter === "" ||
      job.companyName.toLowerCase() === companyNameFilter.toLowerCase();

    const isMatchingRemote =
      remoteFilter === "" ||
      (remoteFilter === "remote" && job.location.toLowerCase() === "remote") ||
      (remoteFilter === "onsite" && job.location.toLowerCase() !== "remote");

    const locationMatch =
      locationFilter === "" ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    return companyNameMatches && isMatchingRemote && locationMatch;
  });

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
