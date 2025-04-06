import { ArrowRightIcon } from "@heroicons/react/24/outline";
import GambarKopi from "../../assets/gambar-kopi.jpg";

export default function HeroScholarshipSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4 sm:px-8 rounded-2xl max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Danai Pendidikanmu dengan <br /> Beasiswa Global
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Dapatkan dukungan finansial untuk studimu melalui beasiswa dari universitas, pemerintah, dan organisasi di seluruh dunia.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-medium px-6 py-3 rounded-lg shadow hover:from-blue-700 hover:to-teal-500 transition"
          >
            Discover Scholarships
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={GambarKopi}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
