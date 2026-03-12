import { Camera } from "lucide-react";

const SelectImage = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <div className="p-4 bg-rose-50 rounded-full mb-4 group-hover:scale-110 transition-transform">
        <Camera size={32} className="text-rose-500" />
      </div>
      <p className="mb-2 text-gray-700 font-semibold text-lg">Upload Photo</p>
      <p className="text-sm text-gray-400">Drag and drop or click to browse</p>
    </div>
    </>
  );
};

export default SelectImage;
