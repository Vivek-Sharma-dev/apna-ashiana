import React from "react";
import { CheckCircle} from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* 1. Backdrop (Background Blur) */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* 2. Main Modal Card */}
      <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl p-10 text-center transform transition-all  scale-100 animate-in fade-in zoom-in duration-300">
        {/* Animated Icon Container */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-ping opacity-20" />
            <div className="relative bg-green-50 p-5 rounded-full">
              <CheckCircle size={50} className="text-green-500" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-gray-900 mb-3 tracking-tight nowrap">
          Your listing is live! 🚀
        </h2>

        <p className="text-gray-500 font-medium mb-8 leading-relaxed">
          Welcome to  <span className="text-rose-500 font-bold">Apna Ashiana</span>{" "}
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all active:scale-95"
          >
             Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
