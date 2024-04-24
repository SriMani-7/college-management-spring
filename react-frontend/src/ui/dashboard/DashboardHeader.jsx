import menu03 from "../../assets/menu-alt-03.svg";
import logo from "../../assets/logo-32.png";
import notificationIcon from "../../assets/notifications_wght400.svg";
import SideNavigation from "./SideNavigation";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function DashboardHeader({ navigationItems = [] }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <main>
      {/** Top appbar */}
      <header className="flex items-center justify-between px-3 py-3 lg:px-5 lg:pl-3 sticky top-0 z-50 w-full bg-white">
        {/** Top appbar left slot */}
        <div className="flex items-center justify-start rtl:justify-end">
          {/** Mobile nav toggle button */}
          <button
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            aria-expanded={isSideNavOpen ? " true" : "false"}
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center text-sm rounded-lg md:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <img src={menu03} className=" size-10" />
          </button>

          {/** College logo with name */}
          <a href="" className="flex ms-2 md:me-24">
            <img src={logo} className="h-8 me-3" alt="collge Logo" />
            <span className="self-center text-lg font-semibold hidden md:block whitespace-nowrap">
              LumInSAT
            </span>
          </a>
        </div>
        {/** Top appbar right slot */}
        <div className="flex items-center ms-3 gap-3">
          {/** Actions */}
          <div>
            <img src={notificationIcon} />
          </div>
        </div>
      </header>

      <div className="flex">
        {/** Side navigation */}

        <div
          className={`w-56 md:w-52 z-40 fixed md:block left-0 ${
            isSideNavOpen ? "block" : "hidden"
          }`}
        >
          <SideNavigation menuItems={navigationItems} />
        </div>

        {/** Content/Outlet */}
        <div className="flex-grow md:ml-52">
          <Outlet />
        </div>

        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
            isSideNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      </div>
    </main>
  );
}
