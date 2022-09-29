import Link from "next/link";
import Logo from "./Logo";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="sticky top-0 shadow-sm shadow-yellow-200 font-sans z-40">
      <nav className="py-4 px-6 bg-zinc-900 flex justify-between items-center">
        <Logo color="text-yellow-200" />
        <div className="text-slate-200">
          <ul className="flex space-x-5 text-normal text-slate-300 ">
            <li>
              <Link href="/#about" scroll={false}>
                <a className="hover:text-yellow-200">
                  Sobre mi
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects" scroll={false}>
                <a className="hover:text-yellow-200">Proyectos</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact" scroll={false}>
                <a className="hover:text-yellow-200">Contacto</a>
              </Link>
            </li>
            <li>
              <IoMdSettings
                className="hover:text-yellow-300 cursor-pointer hover:animate-spin"
                size={25}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
