import { useState, useEffect } from "react";

async function fetchJobs(offset) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const result = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  const data = await result.json();
  return data.jdList;
}

function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedJobs = await fetchJobs();
        setJobs(fetchedJobs);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { jobs, loading, error };
}

export default useJobs;
