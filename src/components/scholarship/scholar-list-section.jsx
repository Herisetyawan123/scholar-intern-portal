import { useState } from "react";
import ScholarCard from "../index/ui/scholar-card";

const scholarships = [
  {
    id: 1,
    name: "ITERA Achievement Scholarship",
    amount: "$",
    deadline: "2025-05-10",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    name: "KIP-Kuliah Scholarship",
    amount: "$",
    deadline: "2025-06-01",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    name: "ITERA x PLN Industry Partner Scholarship",
    amount: "$",
    deadline: "2025-07-01",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop",
    link: "#"
  },
];

export default function ScholarshipList() {
  const [search, setSearch] = useState("");

  const filtered = scholarships.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 mx-8 md:mx-24 lg:mx-32 xl:mx-48">
      <input
        type="text"
        placeholder="Search scholarships..."
        className="w-full mb-6 p-3 rounded-lg border border-gray-300 shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ScholarCard key={item.id} title={item.name} deadline={item.deadline} image={item.image} featured={false} />
        ))}
      </div>
    </div>
  );
}
