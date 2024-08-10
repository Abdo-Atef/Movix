"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggler from "./DarkModeToggler";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import logo from "../../../public/logo.svg";

export default function NavBar() {
  const pathName: string = usePathname();
  // console.log(pathName);
  const [SideBarVisibilty, setSideBarVisibilty] = useState<boolean>(false);
  const handleSideBarToggler = () => {
    setSideBarVisibilty(!SideBarVisibilty);
  }
  
  return (
    <header className="fixed top-0 w-full z-50 text-main py-[10px] main-bg">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="logo">
          <Image
            src={logo}
            alt="logo"
            className="w-[150px]"
            height={80}
          />
        </Link>
        <nav className="flex items-center max-md:hidden">
          <ul className="inline-flex gap-3 font-medium">
            <li>
              <Link className={`${pathName == "/" ? "gradientBg rounded-md text-white" : "" } py-[7px] px-4`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${pathName.includes("movies") ? "gradientBg rounded-md text-white" : "" } py-[7px] px-4 `} href="/movies">
                Movies
              </Link>
            </li>
            <li>
              <Link className={`${pathName.includes("tv") ? "gradientBg rounded-md text-white" : "" } py-[7px] px-4 `} href="/tv">
                TV Shows
              </Link>
            </li>
            <li>
              <Link className={`${pathName == "/search" ? "gradientBg rounded-md text-white" : "" } py-[7px] px-4 `} href="/search">
                Search
              </Link>
            </li>
          </ul>
          <DarkModeToggler />
        </nav>
        <button onClick={handleSideBarToggler} className="md:hidden">
          <FaBars size={25} />
        </button>
        <SideBar pathName={pathName} SideBarVisibilty={SideBarVisibilty}/>
        
          <div
            onClick={handleSideBarToggler}
            className={`${
              SideBarVisibilty ? "visible opacity-60" : "invisible opacity-0"
            } bg-black z-40 fixed w-full h-full top-0 start-0 duration-300`}
          ></div>
        
      </div>
    </header>
  );
}
