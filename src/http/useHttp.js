import { useState, useEffect } from "react";

const http = async (url) => {
  return await fetch(url).then((data) => data.json());
};

export const useHttp = (url) => {
  const [response, setResponse] = useState({
    loading: true,
    results: undefined,
    error: undefined,
  });
  useEffect(() => {
    let isSubscribed = true;
    http(url).then((r) => {
      isSubscribed &&
        setResponse({
          loading: false,
          results: r.success === false ? undefined : r,
          error: r.status_message,
        });
    });
    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return response;
};
