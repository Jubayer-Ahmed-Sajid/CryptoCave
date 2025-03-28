import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex gap-4 text-black">
      <div >
        <Sidebar></Sidebar>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
