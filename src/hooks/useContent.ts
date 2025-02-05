import { useEffect, useState } from "react";
import axios from "axios";

export function useContent() {
  const [contents, setContents] = useState([]);

  const reFresh = () => {
    const result = axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  };

  useEffect(() => {
    reFresh();
    const clock = setInterval(() => {
      reFresh();
    }, 10000);

    return () => clearInterval(clock);
  }, []);

  return { contents, reFresh };
}
