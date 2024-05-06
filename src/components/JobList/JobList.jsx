import { Box, Grid } from "@mui/material";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard/JobCard";

function JobList() {
  const { jobs, loading, error } = useJobs();

  return (
    <Grid container spacing={2}>
      {loading && <p> Loading jobs</p>}
      {error && <p>Error fetching jobs: {error.message}</p>}
      {jobs.length > 0 &&
        jobs.map((job) => <JobCard job={job} key={job.jdUid} />)}
    </Grid>
  );
}

export default JobList;
