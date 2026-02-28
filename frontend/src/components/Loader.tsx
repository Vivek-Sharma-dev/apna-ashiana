// components/common/Loader.tsx
import { type LoaderProps } from "../types/LoaderAndError";

const Loader = ({
  fullPage = false,
  message = "Loading Apna Ashiana...",
}: LoaderProps) => {
  const containerStyle = fullPage
    ? "fixed inset-0 z-50 flex-col bg-white/80 backdrop-blur-sm"
    : "w-full py-10 flex-col";

  return (
    <div className={`flex items-center justify-center ${containerStyle}`}>
      {/* Outer Ring */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin"></div>
        {/* Inner Logo or Dot */}
        <div className="absolute w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
      </div>

      {message && (
        <p className="mt-4 text-gray-600 font-medium animate-pulse tracking-wide">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loader;
