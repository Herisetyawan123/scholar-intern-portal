import React from 'react'
import { CalendarIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ScholarCard({ image, title, deadline, featured }) {
  return (
    <div
      className="bg-white border border-blue-200 rounded-xl shadow-sm overflow-hidden hover:scale-105 transition duration-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
        {featured && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <CalendarIcon className="w-4 h-4 text-blue-700" />
          Deadline: {deadline}
        </div>
        <div className="flex justify-between">
          <button className="border cursor-pointer px-4 py-1.5 font-semibold rounded-lg text-sm bg-[#f8fafc] hover:bg-gray-100">
            View Details
          </button>
          <button className="bg-blue-600 cursor-pointer font-bold text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 flex items-center gap-1">
            Apply <ArrowUpRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
