import { SetStateAction, useEffect, useState } from "react";

interface DadJokeJSON {
  id: string;
  joke: string;
  status: number;
}

export const useFetch = (url: string, options: RequestInit) => {
  const [data, setData] = useState<null | DadJokeJSON>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // Fetch a dad joke
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error: any) {
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
