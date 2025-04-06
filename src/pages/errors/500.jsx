import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Error505() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <div className="bg-red-100 p-4 rounded-full mb-4">
        <ExclamationTriangleIcon className="w-12 h-12 text-red-600" />
      </div>
      <h1 className="text-4xl font-bold text-red-600 mb-2">500</h1>
      <p className="text-lg text-gray-700 mb-2">Internal Server Error</p>
      <p className="text-sm text-gray-500 max-w-md mb-6">
        Maaf, terjadi kesalahan pada server kami. Silakan coba beberapa saat lagi atau kembali ke halaman utama.
      </p>
      <Link
        to="/"
        className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
