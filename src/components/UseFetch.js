import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [url]);
  return { data, error, isLoading };
};

export default UseFetch;
