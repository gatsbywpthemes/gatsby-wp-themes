import React from "react";

export default function Description({ description }) {
  return (
    <>
      <div
        className="mb-10 text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
}
