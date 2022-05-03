import React from "react";
import { Link } from "gatsby";

const PreviousLink = ({ ctx: { prev } }) => {
  return prev ? (
    <Link textStyle="specialLeft" to={prev}>
      Previous
    </Link>
  ) : (
    <span />
  );
};

const NextLink = ({ ctx: { next } }) => {
  return next ? (
    <Link textStyle="specialRight" to={next}>
      <span>Up Next</span>
    </Link>
  ) : (
    <span />
  );
};
export default function PrevNextPostNavigation({ ctx }) {
  return (
    <nav className="flex items-center justify-between py-4 lg:py-8">
      <PreviousLink ctx={ctx} />
      <NextLink ctx={ctx} />
    </nav>
  );
}
