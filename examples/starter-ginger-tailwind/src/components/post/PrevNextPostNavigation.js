import React from "react";
import { Link } from "gatsby";

const PreviousLink = ({ ctx: { prev } }) => {
  return prev ? (
    <Link className="specialLeft" to={prev}>
      Previous
    </Link>
  ) : (
    <span />
  );
};

const NextLink = ({ ctx: { next } }) => {
  return next ? (
    <Link className="specialRight" to={next}>
      <span>Up Next</span>
    </Link>
  ) : (
    <span />
  );
};
export default function PrevNextPostNavigation({ ctx }) {
  return (
    <nav className="flex items-center justify-between py-4 uppercase">
      <PreviousLink ctx={ctx} />
      <NextLink ctx={ctx} />
    </nav>
  );
}
