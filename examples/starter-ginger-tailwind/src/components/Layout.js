import React from "react";
import Header from "~/components/header";
import Footer from "./Footer";
import useThemeDarkMode from "~/hooks/useThemeDarkMode";

export default function Layout({ children }) {
  const { value: colorMode } = useThemeDarkMode();
  console.log({ colorMode });

  return (
    <div className="antialiased dark:bg-gray-700 dark:text-white">
      <Header />
      <main className="lg:ml-24">{children}</main>
      <Footer />
    </div>
  );
}
