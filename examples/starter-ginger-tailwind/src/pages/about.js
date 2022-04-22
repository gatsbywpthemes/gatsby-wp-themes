import React from "react";
import useLocation from "~/hooks/useLocation";

export default function AboutPage() {
  const url = useLocation();
  console.log(url);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
