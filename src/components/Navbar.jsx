import { Menu, X } from "lucide-react";
import { menu } from "../constants/index";
import Logo from "../assets/logo/Logo";
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };
  //agregar el fondo del navbar con blur "backdrop-blur-lg"
  return (
    <>
      <nav className="relative flex h-[80px] justify-between items-center">
        <div className="ml-10 size-12">
          <Logo />
        </div>
        <div>
          <ul className="hidden lg:flex mr-12">
            {menu.map((item, index) => (
              <li key={index} className="">
                <Link
                  className="borde px-4 py-3 text-md hover:border-b-2 hover:border-rojo tracking-widest"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar} className="mr-4">
            {mobileDrawerOpen ? (
              <X className="size-10" />
            ) : (
              <Menu className="size-10" />
            )}
          </button>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-20 z-20 bg-neutral-900 w-full p-12 lg:hidden">
            <ul className="flex flex-col text-center">
              {menu.map((item, index) => (
                <li key={index} className="py-4 text-xl">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <Outlet/>

    </>
  );
};
