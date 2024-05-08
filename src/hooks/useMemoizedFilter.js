import { useMemo } from "react";

function useMemoizedFilter(jobs, filters) {
  const companyNameFilter = filters.companyName;
  const remoteFilter = filters.remote;
  const locationFilter = filters.location;
  const minExperienceFilter = filters.minExperience;
  const minBasePayFilter = filters.minBasePay;
  const roleFilter = filters.role;
  const techStackFilter = filters.techStack;

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];

    if (
      companyNameFilter === "" &&
      remoteFilter === "" &&
      locationFilter === "" &&
      minExperienceFilter === "" &&
      minBasePayFilter === "" &&
      roleFilter === "" &&
      techStackFilter === ""
    ) {
      return jobs; // No filters applied, return all jobs
    }

    return jobs.filter((job) => {
      const companyNameMatch =
        companyNameFilter === "" ||
        job.companyName.toLowerCase() === companyNameFilter.toLowerCase();
      const isMatchingRemote =
        remoteFilter === "" ||
        (remoteFilter === "remote" &&
          job.location.toLowerCase() === "remote") ||
        (remoteFilter === "onsite" && job.location.toLowerCase() !== "remote");
      const locationMatch =
        locationFilter === "" ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());
      const minExpMatch =
        minExperienceFilter === "" ||
        (job.minExp !== null &&
          job.minExp >= parseInt(minExperienceFilter, 10));
      const minBasePayMatch =
        minBasePayFilter === "" ||
        (job.minJdSalary != null &&
          job.minJdSalary >= parseInt(minBasePayFilter, 10));
      const roleMatch =
        roleFilter === "" ||
        (job.jobRole !== null &&
          job.jobRole.toLowerCase().includes(roleFilter.toLowerCase()));
      const techStackMatch =
        techStackFilter === "" ||
        (job.jobRole !== null &&
          job.jobRole.toLowerCase().includes(techStackFilter.toLowerCase()));

      return (
        companyNameMatch &&
        isMatchingRemote &&
        locationMatch &&
        minExpMatch &&
        minBasePayMatch &&
        roleMatch &&
        techStackMatch
      );
    });
  }, [
    jobs,
    companyNameFilter,
    remoteFilter,
    locationFilter,
    minExperienceFilter,
    minBasePayFilter,
    roleFilter,
    techStackFilter,
  ]);

  return filteredJobs;
}

export default useMemoizedFilter;
