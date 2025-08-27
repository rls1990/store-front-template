import Logo from "./Logo";
import { NavCar } from "./NavCar";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between">
        <div className="p-2">
          <Logo />
        </div>
        <div>
          <NavItems />
          <div className="absolute top-8 right-0">
            <NavCar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
