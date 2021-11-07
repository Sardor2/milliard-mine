import { useEffect, useState } from "react";

export const useAsync = (fn) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const res = await fn();
        setData(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, data };
};
