import {
  BuildingOffice2Icon,
  MapPinIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  LinkIcon
} from "@heroicons/react/24/outline";
import NotFound from "../errors/404";
import { useDetailInternship } from "../../hooks/use-fetch-internships";
import LoadingSpinner from "../../components/loading";


export default function InternshipDetail() {
  const { internship, loading } = useDetailInternship();

  if (loading && internship == null) {
    return (
      <LoadingSpinner />
    );
  }

  if (internship == undefined) {
    <LoadingSpinner />
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Banner Image */}
      <img
        src={internship.thumbnail}
        alt={internship.title}
        className="w-full h-64 object-cover rounded-2xl mb-8"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{internship.title}</h1>

      {/* Info Icons */}
      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        <div className="flex items-center gap-2 text-gray-700">
          <BuildingOffice2Icon className="w-5 h-5 text-blue-500" />
          <span className="font-medium">{internship.company}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <MapPinIcon className="w-5 h-5 text-green-500" />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <CalendarIcon className="w-5 h-5 text-red-500" />
          <span>Deadline: {internship.deadline}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-6">{internship.description}</p>

      {/* Requirements */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <ClipboardDocumentListIcon className="w-5 h-5 text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-800">Requirements</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-2">
          {internship ? internship.requirements != undefined ? internship.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          )) : null : null}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href={internship.apply_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white bg-green-700 hover:bg-green-900 px-5 py-2 rounded-lg transition"
      >
        <LinkIcon className="w-5 h-5" />
        Register Now
      </a>
    </div>
  );
}
