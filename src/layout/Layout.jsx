import React from "react";

import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;