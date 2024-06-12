import { useState } from "react";
import logo from "@/assets/logo-32.png";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const navigation = [
  { name: "Facilities", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Admissions", href: "#" },
  { name: "Alumini", href: "#" },
  { name: "Contact", href: "#" },
];

const CollegeLogo = () => (
  <a
    aria-label="college logo"
    aria-current="page"
    className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
    href="#"
  >
    <img src={logo} className="h-8" alt="College Logo" />
    LumInSAT
  </a>
);

const collegeName = "Luminious Institute of Science and Technology";
const description =
  "The college is committed to unlocking the potential of each individual, igniting their minds, and enriching their lives. With Degree and PG College as your educational partner, you can embark on a journey of self-discovery, realizing your true potential and paving the way to a bright and promising future.";

function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <CollegeLogo></CollegeLogo>
            {/*      <!-- Mobile trigger --> */}
            <button
              className="relative order-10 block h-10 w-10 self-center lg:hidden"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <MenuIcon/>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {navigation.map((item) => (
                <li key={item.name} role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    href={item.href}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <Link to="/login">Login</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <h1 className=" text-3xl font-semibold md:text-4xl tracking-tight pt-9">
                {collegeName}
              </h1>
              <p className=" text-md text-gray-600 pt-8">{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
