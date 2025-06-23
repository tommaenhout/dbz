import "./index.css";
import { NavLink } from "react-router";
import { BrowserRouter as Router } from "react-router";




const getDesktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
    : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";

const getMobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-fit md:h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink to="/" className={getDesktopLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/characters" className={getDesktopLinkClass}>
                  Characters
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLink to="/" className={getMobileLinkClass}>
            Home
          </NavLink>
          <NavLink to="/characters" className={getMobileLinkClass}>
            Characters
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
