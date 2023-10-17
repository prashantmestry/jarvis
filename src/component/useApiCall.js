import { useState, useEffect } from "react";

const useApiCall = (url) => {
  console.log("url", url);

  const [info, setInfo] = useState({
    data: [],
    error: null,
    loading: false
  });

  useEffect(() => {
    setInfo({
      ...info,
      loading: true
    });

    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((dt) => {
          console.log("pp", dt);
          setInfo({
            ...info,
            data: dt,
            loading: false
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      setInfo({
        ...info,
        loading: false,
        error: "No url found"
      });
    }
  }, [url]);

  return info;
};

export default useApiCall;
