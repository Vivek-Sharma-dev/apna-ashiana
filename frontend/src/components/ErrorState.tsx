// components/common/ErrorState.tsx
import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  message?: string;
}

const ErrorState = ({ 
  message = "Kuch gadbad ho gayi, dost!", 
}: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-rose-50 rounded-2xl border border-rose-100 my-6">
      <div className="p-4 bg-rose-100 rounded-full text-rose-500 mb-4">
        <AlertCircle size={40} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800">Oh No!</h3>
      <p className="text-gray-600 text-center mt-2 max-w-xs">
        {message}
      </p>

    </div>
  );
};

export default ErrorState;