// import { Contact, HelpCircle, Home, Info, Newspaper } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex md:flex-row flex-col h-fit items-center">
      <div onClick={() => navigate("/")} className={cn("menu-item", location.pathname === '/' ? "bg-white text-green-900 font-semibold" : "bg-green-900")}>
        Home
      </div>

      {/* <div onClick={() => navigate("/audioform")} className={cn("menu-item", location.pathname === '/audioform' ? "bg-white text-green-900 font-semibold" : "bg-green-900")}>
        AudioForm
      </div>
      <div onClick={() => navigate("/about")} className={cn("menu-item", location.pathname === '/about' ? "bg-white text-green-900 font-semibold" : "bg-green-900")}>
        About
      </div> */}
    </div>
  );
}

export default MenuItems;