import { useState, useEffect, useMemo } from "react";

export default function useLocation() {
  const [url, setUrl] = useState("");
  const [pathname, setPathName] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
    setPathName(window.location.pathname);
  }, []);
  return {
    url: useMemo(() => url, [url]),
    path: useMemo(() => pathname, [pathname]),
  };
}
