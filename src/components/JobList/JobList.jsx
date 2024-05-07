import { Grid } from "@mui/material";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard/JobCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

function JobList() {
  const { jobs, loading, loadMore } = useJobs();
  useInfiniteScroll(loadMore);

  return (
    <Grid container spacing={2}>
      {loading && <p> Loading jobs</p>}
      {jobs.length > 0 &&
        jobs.map((job, index) => (
          <JobCard job={job} key={`${job.jdUid}-${index}`} />
        ))}
      <div id="bottomObserver" style={{ height: "10px" }} />
    </Grid>
  );
}

export default JobList;
