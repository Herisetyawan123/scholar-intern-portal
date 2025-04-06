import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center">
        <div className="flex justify-center">
          <div className="bg-green-200 text-green-800 rounded-full p-3 mb-4">
            <BookOpenIcon className="w-6 h-6" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Internships</h2>
        <p className="mt-2 text-gray-600">
          Discover and apply for nternships to gain practical experience and enhance your skills
        </p>
      </div>
    </div>
  );
}
