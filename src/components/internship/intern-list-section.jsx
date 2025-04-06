import InternCard from "../index/ui/intern-card";
import useFilterData from "../../hooks/use-filter-data";

const internships = [
  {
    id: 1,
    position: "Frontend Developer Intern",
    company: "Tech Solutions",
    location: "Jakarta, Indonesia",
    deadline: "2025-05-15",
    category: "Software Development",
    duration: "3 Months",
    paid: true,
    salary: "$300/month",
    image: "",
  },
  {
    id: 2,
    position: "UI/UX Designer",
    company: "Creative Labs",
    location: "Bandung, Indonesia",
    deadline: "2025-04-30",
    category: "Design",
    duration: "6 Months",
    paid: false,
    salary: "",
    image: "",
  },
  {
    id: 3,
    position: "Marketing Analyst Intern",
    company: "Marketly",
    location: "Surabaya, Indonesia",
    deadline: "2025-06-01",
    category: "Marketing",
    duration: "4 Months",
    paid: true,
    salary: "$250/month",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop",
  },
];

export default function InternshipList() {
  const { filtered, handleFilterChange, search } = useFilterData(internships, "position");

  return (
    <div className="p-4 mx-8 md:mx-24 lg:mx-32 xl:mx-48">
      <input
        type="text"
        placeholder="Search internships..."
        className="w-full mb-6 p-3 rounded-lg border border-gray-300 shadow-sm"
        value={search}
        onChange={handleFilterChange}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <InternCard key={item.id} internship={item} featured={false} />
        ))}
      </div>
    </div>
  );
}
