import {
  CalendarIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/16/solid";

const InternCard = ({ internship, featured = false }) => {
  const {
    id,
    title,
    company,
    location,
    deadline,
    duration,
    image,
  } = internship;

  const durationIntern = duration || "Not specified";
  const internshipImage =
    image ||
    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop";

  let formattedDeadline = deadline;
  try {
    const deadlineDate = new Date(deadline);
    if (!isNaN(deadlineDate.getTime())) {
      formattedDeadline = deadlineDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
  } catch (e) {
    console.error("Invalid date format:", deadline, e);

  }

  return (
    <div
      className={`border rounded-xl overflow-hidden shadow-sm hover:scale-105 transition-all h-full ${featured ? "border-teal-300" : "border-gray-200"
        }`}
    >
      {/* Image */}
      <div className="relative h-44">
        <img
          src={internshipImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {featured && (
          <span className="absolute top-3 right-3 bg-teal-500 text-white text-xs px-2 py-1 rounded-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{company}</p>

        <div className="flex items-center text-sm text-gray-500 mb-1">
          <MapPinIcon className="w-4 h-4 mr-1 text-teal-600" />
          {location}
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-1">
          <ClockIcon className="w-4 h-4 mr-1 text-teal-600" />
          {durationIntern}
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <CalendarIcon className="w-4 h-4 mr-1 text-teal-600" />
          Deadline: {formattedDeadline}
        </div>

        <div className="flex justify-between items-center gap-2">
          <a
            href={`/internships/${id}`}
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition"
          >
            View Details
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-teal-600 text-white rounded-md text-sm hover:bg-teal-700 flex items-center"
          >
            Apply
            <ArrowUpRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternCard;
