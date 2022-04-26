import React from "react";

export default function ArchiveTitle({ name, text }) {
  return (
    <>
      <h1 className="h1Archive">
        {text}
        <span
          className="page-title-value"
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </h1>
    </>
  );
}
