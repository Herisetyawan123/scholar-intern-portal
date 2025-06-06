import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Halaman tidak ditemukan.</p>
      <Link to="/" className="text-blue-600 underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
