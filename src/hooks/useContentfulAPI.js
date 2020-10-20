import React, { useState, useEffect, useRef } from "react";

export const useContentfulAPI = (url) => {
  const SPACE_ID = "x1ai4qr7xhjp";
  const ACCESS_TOKEN = "VijNVHgEg73a1a0jy-ZpKH9CKhOgE2TR_tQ7TjZp978";
  const TIMEOUT_DURATION = 5 * 1000;
  const requestTimeout = useRef(null);
  const [data, setData] = useState(null);
  const API_URL = "https://cdn.contentful.com";
  const SPACE_URL = `/spaces/${SPACE_ID}/environments/master/`;

  useEffect(() => {
    requestTimeout.current = setTimeout(() => {
      setData({ error: true, message: "Request timed out" });
      console.error("Request timed out.");
    }, TIMEOUT_DURATION);

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    const fetchData = async () => {
      fetch(`${API_URL}${SPACE_URL}${url}`, options)
        .then((response) => {
          clearTimeout(requestTimeout.current);
          return response.json();
        })
        .then((result) => {
          console.log("API", result);
          setData(result);
        })
        .catch((err) => {
          console.error("Fetch encountered an error.", err);
          setData({ error: true, message: err });
        });
    };

    fetchData();
  }, [url, requestTimeout, TIMEOUT_DURATION]);
  return { data };
};
