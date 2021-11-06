import { useState } from "react";
import api from "./api";

const useSubmitFeedback = ({ onSuccess } = { onSuccess() {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const mutate = async (data) => {
    setLoading(true);
    let res;
    try {
      res = await api("feedback", {
        method: "POST",
        body: JSON.stringify(data),
      });
      onSuccess(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }

    return error ? error : res;
  };

  return { loading, error, mutate };
};

export default useSubmitFeedback;
