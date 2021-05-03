import React from "react";

import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="body-container max-w-[1000px] min-h-screen m-auto">
      <Sidebar />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
