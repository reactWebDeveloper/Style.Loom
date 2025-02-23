import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import Loader from "../Loader/Loader";
export default function HandleLoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        AOS.init(); 
        AOS.refresh(); 
        setLoading(false); 
      }, 2000);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
}