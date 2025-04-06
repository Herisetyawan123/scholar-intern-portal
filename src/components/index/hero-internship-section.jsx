import React from "react";
import GambarWisuda from "../../assets/gambar-wisuda.jpg";

const HeroInternshipSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl m-10 p-6 md:p-10 flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Mulai Karir mu dengan magang lebih dulu
        </h2>
        <p className="text-gray-600 mb-6">
          Asah pengalaman didunia nyata dan tingkatkan keterampilanmu dengan magang di perusahaan terkemuka.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-teal-400 hover:opacity-90 transition"
        >
          Discover Internship
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <div className="flex-1 w-full max-w-lg">
        <img
          src={GambarWisuda}
          alt="Scholarship"
          className="w-full rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroInternshipSection;
