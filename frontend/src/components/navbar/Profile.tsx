import { NavLink } from "react-router-dom";
import SearchBar from "./Searchbar";
import { CircleUser, UserPlus } from "lucide-react";

type NavLinksType = {
  label: string;
  link: string;
  icon?: React.ReactNode;
};
const Profile = () => {
  const navLinks: NavLinksType[] = [
    { label: "Profile", link: "/profile", icon: <CircleUser />  },
    { label: "Become a Host", link: "/host", icon :<UserPlus /> },
  ];

  return (
    <>
      <div className="flex space-x-4 items-center">
        <SearchBar />
        {navLinks.map((navLink) => (
          <NavLink className={`bg-rose-500 p-2 rounded-full text-white hover:bg-gray-200 hover:text-rose-500 transition-all duration-300`} aria-label={navLink?.label} key={navLink?.label} to={navLink?.link}>
            {navLink?.icon}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Profile;
