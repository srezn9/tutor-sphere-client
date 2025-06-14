import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet className="w-11/12 mx-auto"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
