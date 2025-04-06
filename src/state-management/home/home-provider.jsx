// import { useState } from "react"
import HomeContext from "./home-context";
import useHomeData from "../../hooks/use-fetch-home-data";
import LoadingSpinner from "../../components/loading";
import { useEffect } from "react";

const HomeProvider = ({ children }) => {
  const { internships, scholarships, loading } = useHomeData();
  useEffect(() => {
    console.log('Scholarships:', scholarships);
    console.log('Internships:', internships);
  }, [scholarships, internships]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <HomeContext.Provider value={{ internships, scholarships }}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider;