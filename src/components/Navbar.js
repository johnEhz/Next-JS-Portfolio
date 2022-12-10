import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { AiOutlineMenu, AiOutlineClose, AiFillPhone } from "react-icons/ai";
import { FaProjectDiagram, FaUserAlt, FaBrain } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const theme_mode = localStorage.getItem("theme");
    if (theme_mode) {
      setTheme(theme_mode);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const handleChangeTheme = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  const changeTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 border-b lg:dark:bg-opacity-80 lg:backdrop-blur-sm lg:bg-opacity-80 lg:dark:backdrop-blur-sm dark:bg-black bg-white border-gray-200 dark:border-neutral-800 font-sans z-40 flex justify-center">
      <nav className="px-6 flex justify-between items-center max-w-[1600px] w-full h-16 dark:text-neutral-300 z-50">
        <Logo />
        <div className="dark:text-slate-200 w-full flex justify-end">
          <button
            onClick={() => setShowNav(!showNav)}
            className={`lg:hidden cursor-pointer dark:hover:text-white hover:text-neutral-700`}
          >
            {showNav ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>
          <ul
            className={`items-center lg:text-sm text-md lg:flex lg:mt-0 lg:relative lg:w-full lg:justify-end lg:flex-row lg:space-y-0 lg:border-none lg:shadow-none shadow-sm shadow-neutral-500 dark:shadow-neutral-700 border dark:border-neutral-800 border-slate-200 top-0 fixed w-[280px] p-5 gap-8 text-normal rounded-md space-y-4 flex-col dark:text-slate-300 text-neutral-600 dark:bg-[#111111] dark:lg:bg-transparent lg:bg-transparent bg-white ${
              showNav ? "mt-16" : "hidden"
            }`}
          >
            <li>
              <Link href="/#about" scroll={false}>
                <a className="dark:hover:text-white hover:text-black flex flex-row gap-2 items-center">
                  <FaUserAlt size={13} />
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#techs" scroll={false}>
                <a className="dark:hover:text-white hover:text-black flex flex-row gap-2 items-center">
                  <FaBrain size={13} />
                  Tecnologías
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects" scroll={false}>
                <a className="dark:hover:text-white hover:text-black flex flex-row gap-2 items-center">
                  <FaProjectDiagram size={13} />
                  Proyectos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact" scroll={false}>
                <a className="dark:hover:text-white hover:text-black flex flex-row gap-2 items-center">
                  <AiFillPhone size={18} />
                  Contacto
                </a>
              </Link>
            </li>
            <li className="flex flex-row gap-2 items-center">
              {theme === "light" ? (
                <MdLightMode size={18} />
              ) : (
                <MdDarkMode size={18} />
              )}
              <select
                className="h-8 px-2 outline-none border rounded-lg cursor-pointer bg-transparent"
                value={theme}
                onChange={handleChangeTheme}
              >
                <option value="light" className="text-black">Light mode</option>
                <option value="dark" className="text-black">Dark mode</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
