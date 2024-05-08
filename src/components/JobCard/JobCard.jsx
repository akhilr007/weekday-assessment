import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import "./JobCard.css";
import { useState } from "react";

const JobCard = ({
  job: {
    companyName,
    logoUrl,
    jobDetailsFromCompany,
    jobRole,
    minExp,
    location,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
  },
}) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Grid item xs={12} md={6} lg={4} className="job-card-grid-item">
      <Card className="job-card">
        <CardContent>
          <Box className="company-info">
            {logoUrl && (
              <img src={logoUrl} alt={companyName} className="company-logo" />
            )}
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#959595", fontSize: "1.2vw" }}
              >
                {companyName}
              </Typography>

              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "capitalize", fontSize: "1.2vw" }}
              >
                {jobRole} {"Engineer"}
              </Typography>

              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "capitalize", fontSize: "15px" }}
              >
                {location}
              </Typography>
            </Box>
          </Box>

          <Box my={2}>
            <Typography variant="body1" color="textSecondary">
              Estimated Salary: {minJdSalary ? minJdSalary : 0} -{" "}
              {maxJdSalary ? maxJdSalary : 0}
              {"K " + salaryCurrencyCode}
            </Typography>
          </Box>
          {showMore
            ? jobDetailsFromCompany
            : `${jobDetailsFromCompany.slice(0, 100)}...`}
          {jobDetailsFromCompany.length > 100 && (
            <button className="show-more" onClick={toggleShowMore}>
              {showMore ? " Show Less" : " Show More"}
            </button>
          )}
          <Box mt={2}>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: "#959595" }}
            >
              <strong>Minimum Experience</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {minExp ? minExp : 0} years
            </Typography>
          </Box>
          <Box mt={2} className="apply-button">
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                fontSize: "1.2vw",
                backgroundColor: "#54efc3",
                color: "black",
                fontWeight: "normal",
              }}
            >
              ⚡ Easy Apply
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default JobCard;
