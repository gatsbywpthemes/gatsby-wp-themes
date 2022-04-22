import React from "react";
import Header from "~/components/header";
import useDarkMode from "use-dark-mode";

export default function Layout({ children }) {
  const { value: colorMode } = useDarkMode();
  console.log({ colorMode });

  return (
    <div className="antialiased">
      <Header />
      <main className="lg:ml-24">{children}</main>
    </div>
  );
}
