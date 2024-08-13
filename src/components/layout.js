import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = (openStateValue) => {
    setIsOpen(openStateValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar onOpenChange={onToggle} />
      <div className="wrapper">
        <div
          className="sidebarWrapper"
          style={{ minWidth: isOpen ? "250px" : "100px" }}
        >
          <Sidebar isOpen={isOpen} />
        </div>
        <div
          className="container"
          style={{
            // minWidth: isOpen ? "calc(100vw - 250px)" : "calc(100vw - 100px)",
            minWidth: "100vw",
            maxWidth: "100vw",
            paddingLeft: isOpen ? "250px" : "120px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
