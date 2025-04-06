// import { useState } from "react"
import ScholarshipsContext from "./scholarships-context";
import LoadingSpinner from "../../components/loading";
import { useScholarships } from "../../hooks/use-fetch-scholarships";

const ScholarshipProvider = ({ children }) => {
  const { scholarships, loading } = useScholarships();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ScholarshipsContext.Provider value={{ scholarships }}>
      {children}
    </ScholarshipsContext.Provider>
  )
}

export default ScholarshipProvider;