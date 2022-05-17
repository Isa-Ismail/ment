import React from "react";
import tw from "tailwind-styled-components";
import Footer from "./Footer";
// import HamburgerMenuContent from "./HamburgerMenuContent";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <PageContainer>
      {/* ====== Header ====== */}

      <Header />

      {/* ====== Main ====== */}

      <main>
        {/* ====== <HamburgerMenuContent ====== /> */}
        {children}
      </main>

      {/* ====== Footer */}

      <Footer />
    </PageContainer>
  );
}

// Tailwind styled components

const PageContainer = tw.div`
  relative
`