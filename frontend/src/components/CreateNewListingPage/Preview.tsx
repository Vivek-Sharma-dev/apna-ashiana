import { Camera } from "lucide-react";

const Preview = ({ preview }: { preview: string }) => {
  return (
    <div className="relative w-full h-full group">
      <img
        src={preview}
        alt="Preview"
        className="w-full h-full object-cover rounded-4xl"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl flex flex-col items-center justify-center backdrop-blur-[2px]">
        <Camera size={32} className="text-white mb-2" />
        <p className="text-white font-bold">Change Property Image</p>
      </div>
    </div>
  );
};

export default Preview;
