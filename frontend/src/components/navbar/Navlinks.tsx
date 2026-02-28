import { NavLink } from "react-router-dom";


type NavLinksType = {
  label: string;
  link: string; 
}
const Navlinks = () => {
  const navLinks: NavLinksType[] = [
    { label: "Home", link: "/" },
    { label: "Explore", link: "/explore" },
    { label: "Host", link: "/host" },
  ];

  const activeClassName = "text-rose-500 font-bold after:bg-rose-500 after:w-full";
  const baseStyle = "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-1 after:bg-gray-500  transition-all duration-300 after:transition-all after:duration-300";
  return (
    <>
     <div className="flex space-x-4">  
      {navLinks.map((navLink) => (
        <NavLink
          key={navLink.label}
          to={navLink.link}
          className={({ isActive }) => `${baseStyle} ${isActive ? activeClassName : ""}`}
        >
          {navLink.label}
        </NavLink>
        
      ))}
      </div> 
    </>
  )
}

export default Navlinks
