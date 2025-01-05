import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchTopics = (level: string, branch: string) => {
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL_API_BASE_URL}/topics/?level=${level}&branch=${branch}`
        );
        setTopics(response.data);
      } catch (err) {
        setError('Failed to fetch topics');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [level, branch]);

  return { topics, loading, error };
};

export default useFetchTopics;
