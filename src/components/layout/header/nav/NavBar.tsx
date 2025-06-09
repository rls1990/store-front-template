import Logo from "./Logo";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between">
        <div className="p-2">
          <Logo />
        </div>
        <NavItems />
      </div>
    </nav>
  );
};

export default NavBar;
