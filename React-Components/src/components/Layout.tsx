import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="site-background">
      <Navbar />
      <main className="content container">{children}</main>
    </div>
  );
};

export default Layout;
