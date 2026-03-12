import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Profile from "./Profile";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle
import SearchBar from "./Searchbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 ">
      <div className="flex items-center justify-between py-4 px-4 md:px-0 container mx-auto">
        <div className="flex-1 lg:flex-none">
          <Logo />
        </div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:block">
          <Navlinks />
        </nav>

        {/* Desktop Profile & Search - Hidden on Mobile */}
        <div className="hidden md:block">
          <Profile />
        </div>
        <div className="lg:hidden">
          <SearchBar />
        </div>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition-colors "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        ref={menuRef}
        className={`
        fixed right-0 top-full w-[60%] h-full z-60 flex flex-col p-6 transition-all duration-500 ease-in-out md:hidden
        ${isMenuOpen ? "translate-y-0 scale-100 opacity-100 " : "-translate-y-full scale-0 opacity-0"}
      `}
      >
        {/* Reuse Components in Vertical Layout */}
        <div className="flex flex-col space-y-8 text-xl font-semibold  bg-white/70 rounded-2xl p-3">
          <Navlinks mobile onClick={() => setIsMenuOpen(false)} />
          <div className="pt-8 border-t border-gray-100">
            <Profile />
          </div>
        </div>g
      </div>
    </header>
  );
};

export default Header;
