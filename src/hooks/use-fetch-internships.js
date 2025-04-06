import { useEffect, useState } from 'react';

export function useInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchInternships = async () => {
      try {
        const res = await fetch(
          'https://67f28b6aec56ec1a36d369fa.mockapi.io/api/v1/internship',
          { signal }
        );
        if (!res.ok) throw new Error('Failed to fetch internships');
        const data = await res.json();
        setInternships(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();

    return () => {
      controller.abort();
    };
  }, []);

  return { internships, loading, error };
}
