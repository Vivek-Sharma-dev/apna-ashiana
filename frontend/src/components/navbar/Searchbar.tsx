import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className={`flex items-center rounded-full py-1 px-2 transition-all duration-500 ${isExpanded ? 'shadow-lg border border-gray-200' : ""}`}>
      
      {/* Search Icon Button */}
      <button 
        className="p-2 rounded-full bg-rose-500 text-white shrink-0 transition-transform active:scale-90" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Search size={24} strokeWidth={3} />
      </button>

      {/* Form Container */}
      <form 
        action="#" 
        className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-w-100 opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"
        }`}
      >
        <input 
          type="text" 
          placeholder="Search For Place" 
          className="outline-none bg-transparent w-48 py-1"
        />
        <button  className="bg-rose-500 text-white px-4 py-2 rounded-full font-bold uppercase text-xs ml-2 whitespace-nowrap">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;