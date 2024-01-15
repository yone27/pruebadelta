import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container pt50">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
