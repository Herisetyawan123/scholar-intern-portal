import { CalendarIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ScholarCard from "./ui/scholar-card";
import { useContext } from "react";
import HomeContext from "../../state-management/home/home-context";
import { Link } from "react-router-dom";

export default function FeaturedScholarshipsSection() {
  const data = useContext(HomeContext);

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Scholarships</h2>
            <p className="text-gray-500">Explore the top scholarship opportunities</p>
          </div>
          <Link to={'/scholarships'} className="text-blue-600 hover:underline flex items-center gap-1">
            View All <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.scholarships.map((item, index) => (
            <ScholarCard key={index} id={item.id} image={item.thumbnail} title={item.title} deadline={item.deadline} featured={item.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
