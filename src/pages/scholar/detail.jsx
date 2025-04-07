import { CalendarDaysIcon, LinkIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
// import { useParams } from "react-router-dom";
// import NotFound from "../errors/404";
import { useDetailScholarship } from "../../hooks/use-fetch-scholarships";
import LoadingSpinner from "../../components/loading";

// const scholarships = [{
//   id: 1,
//   name: "ITERA Achievement Scholarship",
//   description: "Scholarship for students with academic or non-academic achievements at ITERA.",
//   deadline: "2025-05-10",
//   requirements: [
//     "Minimum GPA 3.5",
//     "Recommendation letter from academic advisor",
//     "Active in campus activities"
//   ],
//   registration_link: "https://beasiswa.itera.ac.id/prestasi",
//   thumbnail: "https://picsum.photos/seed/beasiswa1/400/250",
//   created_at: "2025-04-06T12:00:00Z"
// }];
export default function ScholarshipDetailPage() {
  const { scholarship, loading } = useDetailScholarship();

  if (loading && scholarship == null) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      {/* Thumbnail */}
      <div className="mb-6">
        <img
          src={scholarship.thumbnail}
          alt={scholarship.name}
          className="rounded-xl w-full h-64 object-cover shadow"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{scholarship.name}</h1>

      {/* Description */}
      <p className="text-gray-700 mb-6">{scholarship.description}</p>

      {/* Deadline */}
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <CalendarDaysIcon className="w-5 h-5" />
        <span><strong>Deadline:</strong> {scholarship.deadline}</span>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          Requirements
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {scholarship.requirements && scholarship.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Registration Link */}
      <a
        to={`mailto:admin@beasiswa.com?subject=Daftar Beasiswa: ${encodeURIComponent(scholarship.title)}&body=Halo, saya tertarik untuk mendaftar beasiswa "${scholarship.title}". Mohon informasinya lebih lanjut.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
      >
        <LinkIcon className="w-5 h-5" />
        Register Now
      </a>
    </section>
  );
}
