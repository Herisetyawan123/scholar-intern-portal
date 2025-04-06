// import { useState } from "react"
import InternshipsContext from "./internships-context";
import LoadingSpinner from "../../components/loading";
import { useInternships } from "../../hooks/use-fetch-internships";

const InternshipProvider = ({ children }) => {
  const { internships, loading } = useInternships();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <InternshipsContext.Provider value={{ internships }}>
      {children}
    </InternshipsContext.Provider>
  )
}

export default InternshipProvider;