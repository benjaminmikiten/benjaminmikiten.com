import React, { useState, useEffect, useRef } from "react";

import { createClient } from "contentful";

// This is a READ-ONLY API, so enjoy my creds.
const SPACE_ID = "x1ai4qr7xhjp";
const ACCESS_TOKEN = "VijNVHgEg73a1a0jy-ZpKH9CKhOgE2TR_tQ7TjZp978";
const HOST = "https://cdn.contentful.com";

const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  host: HOST,
});

export const useContentfulClient = (contentType, options = {}) => {
  const TIMEOUT_DURATION = 5 * 1000;
  const requestTimeout = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    requestTimeout.current = setTimeout(() => {
      setData({ error: true, message: "Request timed out" });
      console.error("Request timed out.");
    }, TIMEOUT_DURATION);

    const fetchData = async () => {
      let entries = contentfulClient
        .getEntries({
          content_type: contentType,
          ...options,
        })
        .then((response) => {
          clearTimeout(requestTimeout.current);
          setData(response);
        })
        .catch((err) => {
          console.error("Fetch encountered an error.", err);
          setData({ error: true, message: err });
        });
    };

    fetchData();
  }, [contentType, requestTimeout, TIMEOUT_DURATION]);

  return data;
};
