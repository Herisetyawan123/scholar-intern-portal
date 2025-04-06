import { CalendarIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ScholarCard from "./ui/scholar-card";

const scholarships = [
  {
    title: "PT Pertamina Foundation Scholarship",
    deadline: "Jun 10, 2025",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop", // Ganti sesuai path gambar kamu
    featured: true,
  },
  {
    title: "Telkom Indonesia Scholarship",
    deadline: "May 20, 2025",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "LPDP Scholarship",
    deadline: "Aug 01, 2025",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop",
    featured: true,
  },
];

export default function FeaturedScholarshipsSection() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Scholarships</h2>
            <p className="text-gray-500">Explore the top scholarship opportunities</p>
          </div>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
            View All <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scholarships.map((item, index) => (
            <ScholarCard key={index} image={item.image} title={item.title} deadline={item.deadline} featured={item.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
