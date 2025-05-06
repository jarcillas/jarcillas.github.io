import { useEffect, useState } from "react";

interface DadJokeJSON {
  id: string;
  joke: string;
  status: number;
}

export const useFetch = (url: string, options: RequestInit) => {
  const [data, setData] = useState<null | DadJokeJSON>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // Fetch a dad joke
      const response = await fetch(url, options);
      console.log(`Fetching data from ${url}...`);
      const result = await response.json();
      console.log("Response:");
      console.log(result);
      setData(result);
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, fetchData };
};
