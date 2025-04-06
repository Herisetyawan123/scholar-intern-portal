import { BookOpenIcon, GiftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-blue-600 to-teal-500 text-white py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          <span className="text-white">Scholarships & Internships</span>
        </h1>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/scholarships"
            className="bg-white text-blue-800 font-medium px-5 py-3 rounded-xl flex items-center gap-2 shadow hover:bg-blue-100 transition"
          >
            <BookOpenIcon className="w-5 h-5" />
            Browse Scholarships
          </Link>
          <Link
            to="/internships"
            className="bg-transparent border border-white text-white font-medium px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-blue-800 transition"
          >
            <GiftIcon className="w-5 h-5" />
            Explore Internships
          </Link>
        </div>
      </div>
    </section>
  );
}
