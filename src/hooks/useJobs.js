import { useState, useEffect } from "react";

async function fetchJobs(offset) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({ limit: 10, offset });
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
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newJobs = await fetchJobs(offset);
        if (newJobs.length === 0) {
          setHasMore(false);
        } else {
          setJobs((prevJobs) => [...new Set([...prevJobs, ...newJobs])]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [offset]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + 10);
  };

  return { jobs, loading, hasMore, loadMore };
}

export default useJobs;
