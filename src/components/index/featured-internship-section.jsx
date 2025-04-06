import React, { useContext } from "react";
import {
  ArrowUpRightIcon
} from "@heroicons/react/24/outline";
import InternCard from "./ui/intern-card";
import HomeContext from "../../state-management/home/home-context";

const FeaturedInternshipsSection = () => {
  const data = useContext(HomeContext);

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Magang Unggulan</h2>
          <p className="text-gray-600">Temukan kesempatan magang menarik</p>
        </div>
        <a
          href="#"
          className="text-teal-600 font-medium flex items-center gap-1 hover:underline"
        >
          View All
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          data.internships.map((internship) => (
            <InternCard internship={internship} key={internship.id} featured={true} />
          ))
        }
      </div>
    </section>
  );
};

export default FeaturedInternshipsSection;
