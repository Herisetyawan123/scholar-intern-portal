export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-teal-500 border-t-transparent mb-4"></div>
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}
