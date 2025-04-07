import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function useScholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchScholarships = async () => {
      try {
        const res = await fetch(
          'https://67f28b6aec56ec1a36d369fa.mockapi.io/api/v1/scholarship',
          { signal }
        );
        if (!res.ok) throw new Error('Failed to fetch scholarships');
        const data = await res.json();
        setScholarships(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();

    return () => {
      controller.abort();
    };
  }, []);

  return { scholarships, loading, error };
}

export function useDetailScholarship() {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchScholarship = async () => {
      try {
        const res = await fetch(
          'https://67f28b6aec56ec1a36d369fa.mockapi.io/api/v1/scholarship',
          { signal }
        );
        if (!res.ok) throw new Error('Failed to fetch scholarship');
        const data = await res.json();
        const scholarship = data.find((item) => item.id === Number(id));
        setScholarship(scholarship);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchScholarship();

    return () => {
      controller.abort();
    };
  }, [id]);

  return { scholarship, loading, error };
}
