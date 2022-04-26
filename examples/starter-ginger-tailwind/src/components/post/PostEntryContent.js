import React from "react";
import ActivatePrismaScripts from "~/utils/ActivatePrismaScripts";
import ParsedContent from "~/utils/ParsedContent";

export default function PostEntryContent({ content }) {
  return (
    <div>
      <ParsedContent content={content} />
      <ActivatePrismaScripts />
    </div>
  );
}
