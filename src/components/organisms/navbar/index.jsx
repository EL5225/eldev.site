import { HamburgerIcon, Button, NavDropDown, DarkMode } from "@/components";
import { CheckTheme } from "@/services";
import { downloadCv } from "@/utils";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme"));
  const element = document.documentElement;

  const setDarkTheme = () => {
    setIsDarkMode("dark");
    if (isDarkMode === "dark") {
      setIsDarkMode("light");
    } else {
      setIsDarkMode("dark");
    }
  };

  const isDrowDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    if (isDarkMode === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (isDarkMode === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  }, [element.classList, isDarkMode]);

  useEffect(() => {
    CheckTheme();
  }, []);

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
      ? `capitalize border-b-2 text-black dark:text-white border-slate-400 dark:border-slate-100 duration-300 ease-out`
      : `border-b capitalize font-medium duration-200 border-white hover:text-gray-700 hover:border-slate-300 dark:border-black hover:dark:text-slate-100 hover:dark:border-slate-100 duration-300 ease-out `;
  };

  const hamNavClass = ({ isActive }) => {
    return isActive
      ? `capitalize rounded-md text-black bg-slate-200 dark:bg-slate-500 dark:text-slate-100 duration-300 ease-out`
      : `capitalize font-medium duration-100 rounded-md hover:text-black bg-white dark:bg-zinc-900 dark:text-slate-200 dark:hover:text-slate-100 duration-300 ease-out`;
  };

  return (
    <header
      className={`w-full flex fixed items-center justify-between px-4 font-semibold bg-white dark:bg-zinc-900 duration-300 ease-out text-slate-500  h-[10vh] z-50`}>
      <figure>
        <figcaption
          className={`text-lg w-[8vw] px-2 font-mono font-bold dark:text-slate-200`}>
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
      <div className="flex justify-between items-center md:w-[20vw] lg:w-[15vw] xl:w-[12vw]">
        <Button
          className={`hidden md:block text-slate-500 hover:bg-slate-200 rounded-md hover:text-black dark:text-slate-200 dark:hover:bg-slate-500`}
          click={downloadCv}>
          Download CV
        </Button>
        <Button className={`duration-200 dark:rotate-180`} click={setDarkTheme}>
          <DarkMode color={isDarkMode === "dark" ? "#ffff" : `#434242`} />
        </Button>
      </div>

      {/* Mobile */}
      <nav className="block md:hidden">
        <Button
          click={isDrowDown}
          className={`flex items-center  rounded-md text-white hover:bg-slate-200 dark:hover:bg-slate-500`}>
          <HamburgerIcon
            className={`w-8 duration-200 ${dropDown ? "rotate-90" : ""} `}
            theme={isDarkMode}
          />
        </Button>
        <NavDropDown className={`-mx-[40vw] rounded-md`} isDropDown={dropDown}>
          <ul
            className="flex flex-col rounded-md gap-2"
            onClick={() => {
              isDrowDown();
              document.documentElement.scrollTop = 0;
            }}>
            {navList.map((nav) => (
              <NavLink to={nav.link} key={nav.id} className={hamNavClass}>
                <li className="w-[45vw] px-4 py-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-500 duration-300 ease-out">
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
