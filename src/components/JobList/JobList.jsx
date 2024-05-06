import { Box } from "@mui/material";
import useJobs from "../../hooks/useJobs";

function JobList() {
  const { jobs, loading, error } = useJobs();

  return (
    <Box>
      {loading && <p> Loading jobs</p>}
      {error && <p>Error fetching jobs: {error.message}</p>}
      {jobs.length > 0 && <pre>{JSON.stringify(jobs, null, 2)}</pre>}
    </Box>
  );
}

export default JobList;
