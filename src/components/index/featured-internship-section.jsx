import React from "react";
import {
  ArrowUpRightIcon
} from "@heroicons/react/24/outline";
import InternCard from "./ui/intern-card";

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

const FeaturedInternshipsSection = () => {
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
          internships.map((internship) => (
            <InternCard internship={internship} key={internship.id} featured={true} />
          ))
        }
      </div>
    </section>
  );
};

export default FeaturedInternshipsSection;
