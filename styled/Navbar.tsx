import Link from "next/link";
import Logo from "./Logo";
import NavList from "./NavList";
import Btn from "./home/Btn";
import Menubar from "./Menubar";

function Navbar() {
  return (
    <nav>
      <div className="px-5 items-center py-2 md:px-8 md:py-5 flex gap-3 justify-between shadow-md">
        {/* logo */}
        <Logo />
        {/* menu bar */}
        <NavList />
        {/* register Btn */}
        <div className="hidden md:block ml-2">
          <Link href={"/register"}>
            <Btn bg="#FE581C" text="Register" />
          </Link>
        </div>
        <Menubar />
      </div>
    </nav>
  );
}

export default Navbar;
