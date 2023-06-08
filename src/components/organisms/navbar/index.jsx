import { HamburgerIcon, Button, NavDropDown } from "@/components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1sjIVUHQjCcLZZRwdbkEXm94bQQ4I55a_/view?usp=sharing",
      "_blank"
    );
  };

  const isDrowDown = () => {
    setDropDown(!dropDown);
  };

  const navList = [
    {
      id: 1,
      navItem: "home",
      link: "/",
    },
    {
      id: 2,
      navItem: "about",
      link: "/about",
    },
    {
      id: 3,
      navItem: "contact",
      link: "/contact",
    },
  ];

  const navClass = ({ isActive }) => {
    return isActive
      ? "text-black capitalize border-b-2 border-slate-400"
      : "border-b border-white hover:text-gray-700 hover:border-slate-300 capitalize font-medium duration-200 ";
  };

  const hamNavClass = ({ isActive }) => {
    return isActive
      ? "capitalize text-black bg-slate-200 rounded-md"
      : "capitalize font-medium duration-100 hover:text-black bg-white rounded-md";
  };

  return (
    <header className="w-full fixed flex items-center bg-white justify-between px-4 font-semibold text-slate-500 h-[8vh]">
      <figure>
        <figcaption className="text-lg w-[8vw] px-2 font-mono font-bold">
          EL.
        </figcaption>
      </figure>
      <nav className="hidden md:block">
        <ul className="flex gap-x-6">
          {navList.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.link} className={navClass}>
                {nav.navItem}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        className={`hidden md:block hover:bg-slate-200 rounded-md hover:text-black`}
        click={downloadCv}
      >
        Download CV
      </Button>

      {/* Mobile */}
      <nav className="block md:hidden">
        <Button
          click={isDrowDown}
          className={`flex items-center hover:bg-slate-100 rounded-md text-white`}
        >
          <HamburgerIcon
            className={`w-8 duration-200 ${dropDown ? "rotate-90" : ""}`}
          />
        </Button>
        <NavDropDown className={`-mx-[40vw] rounded-md`} isDropDown={dropDown}>
          <ul
            className="flex flex-col rounded-md gap-2"
            onMouseLeave={isDrowDown}
          >
            {navList.map((nav) => (
              <NavLink to={nav.link} key={nav.id} className={hamNavClass}>
                <li className="w-[45vw] px-4 py-1 rounded-md hover:bg-slate-200">
                  {nav.navItem}
                </li>
              </NavLink>
            ))}
          </ul>
        </NavDropDown>
      </nav>
    </header>
  );
};
