import {
  BookOpenIcon,
  GiftIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import StatsCard from "./ui/stats-card";

const stats = [
  {
    icon: <BookOpenIcon className="w-8 h-8 text-blue-500" />,
    value: "1000+",
    label: "Beasiswa",
  },
  {
    icon: <GiftIcon className="w-8 h-8 text-teal-500" />,
    value: "500+",
    label: "Magang",
  }
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {stats.map((item, index) => (
          <StatsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
