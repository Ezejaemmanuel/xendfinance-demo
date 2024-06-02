"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const navItems = [
  { label: "Products", href: "/products" },
  { label: "Developer", href: "/developer" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

const AuthButtons = () => {
  // const [userData, setUserData] = useState<KindeUser | null>(null);
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState<
  //   boolean | null
  // >(null);

  // useEffect(() => {
  //   if (!isLoading) {
  //     setUserData(user);
  //     setIsUserAuthenticated(isAuthenticated);
  //   }
  // }, [isAuthenticated, isLoading]);

  // console.log("is he authenticated ", isUserAuthenticated);

  return (
    <>
      {true ? (
        <>
          <Link href="/dashboard" className="rounded-md border px-3 py-2">
            Dashboard
          </Link>
          <Button>LogOut</Button>
        </>
      ) : (
        <>
          <Button>
            <Button className="rounded-md border px-3 py-2">Sign In</Button>
          </Button>
          <Button className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2">
            Create an account
          </Button>
        </>
      )}
    </>
  );
};

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg">
      <div className="container relative mx-auto px-4 lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span className="mr-2 text-sm">Logo </span>
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden items-center justify-center space-x-12 lg:flex">
            <AuthButtons />
          </div>
          <div className="flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-900 p-12 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <AuthButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
