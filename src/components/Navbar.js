import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 shadow-sm font-sans z-40">
      <nav className="py-4 bg-zinc-900 flex justify-between items-center px-36">
        <Logo color="text-yellow-200" />
        <div className="text-slate-200">
          <ul className="flex space-x-8 text-normal text-slate-300 ">
            <li>
              <Link href="/#about" scroll={false}>
                <a className="hover:text-yellow-200">About</a>
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
