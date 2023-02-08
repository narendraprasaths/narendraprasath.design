import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Header />
      <div className="flex flex-col h-screen">
        <TopNavBar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
