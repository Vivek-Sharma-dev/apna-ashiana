import { NavLink } from "react-router-dom";
import SearchBar from "./Searchbar";

type NavLinksType = {
  label: string;
  link: string;
};
const Profile = () => {
  const navLinks: NavLinksType[] = [
    { label: "Profile", link: "/profile" },
    { label: "Become a Host", link: "/host" },
  ];

  return (
    <>
      <div className="flex space-x-4 items-center">
        <SearchBar />
        {navLinks.map((navLink) => (
          <NavLink key={navLink.label} to={navLink.link}>
            {navLink.label}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Profile;
