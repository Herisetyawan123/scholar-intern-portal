import { useEffect, useState } from 'react';

export default function useHomeData() {
  const [scholarships, setScholarships] = useState([]);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const didFetch = useRef(false);

  useEffect(() => {
    // // katanya biar ga error
    // if (didFetch.current) return;
    // didFetch.current = true;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const [scholarshipRes, internshipRes] = await Promise.all([
          fetch(
            'https://67f28b6aec56ec1a36d369fa.mockapi.io/api/v1/scholarship',
            { signal }
          ),
          fetch(
            'https://67f28b6aec56ec1a36d369fa.mockapi.io/api/v1/internship',
            { signal }
          ),
        ]);

        if (!scholarshipRes.ok || !internshipRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const scholarshipsData = await scholarshipRes.json();
        const internshipsData = await internshipRes.json();

        setScholarships(scholarshipsData.slice(0, 3));
        setInternships(internshipsData.slice(0, 3));
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    scholarships,
    internships,
    loading,
    error,
  };
}
