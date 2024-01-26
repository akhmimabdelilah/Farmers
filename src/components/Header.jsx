import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const textColorStyle = {
    color: "rgba(124, 124, 124, 1)",
  };
  return (
    <div className="bg-green-900 flex-box h-24 w-full lg:px-8 text-center">
      <div className="fixed-top flex-box justify-between w-full lg:px-48 px-10 py-2 text-green-500 text-center">

        <Logo />
        <div className="hidden lg:flex-box">
          <MenuItems textColorStyle={textColorStyle} />
        </div>
        <div
          className="border p-2 rounded-md text-white hover:text-black hover:bg-white cursor-pointer block lg:hidden z-10"
          onClick={() => {
            setMenuOpen((open) => !open);
          }}
        >
          <Menu />
          <div className="absolute top-20 left-0 flex-box flex-col pb-8 w-full bg-green-900 ">
            {menuOpen ? (
              <>
                {" "}
                <MenuItems />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;