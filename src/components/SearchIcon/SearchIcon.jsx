import { Box, Typography, Badge } from "@mui/material";

function SearchIcon({ filteredJobs, jobs }) {
  return (
    <Box display="flex" justifyContent="center">
      <Box position="relative">
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Search Jobs
          <Badge
            badgeContent={
              filteredJobs.length > 0 ? filteredJobs.length : jobs.length
            }
            color="primary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(50%, -50%)",
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
}

export default SearchIcon;
