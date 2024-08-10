import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import DarkModeToggler from "./DarkModeToggler";

interface sideBarProps {
  pathName: string;
  SideBarVisibilty: boolean;
}

export default function SideBar({ pathName, SideBarVisibilty }: sideBarProps) {
  return (
    <aside
      className={`absolute w-[250px] h-screen top-0 ${
        !SideBarVisibilty ? "start-[-250px]" : "start-0"
      } main-bg shadow-xl p-3 pt-5 duration-300 z-50`}
    >
      <div className="logo mb-8">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="w-[150px] mx-auto"
            height={80}
          />
        </Link>
      </div>
      <h3 className="text-xl font-medium my-6 ms-2">MENU</h3>
      <ul className="flex gap-3 font-medium flex-col">
        <li>
          <Link
            className={`${
              pathName == "/" ? "gradientBg rounded-md text-white" : ""
            } py-[7px] px-4 block`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathName.includes("movies") ? "gradientBg rounded-md text-white" : ""
            } py-[7px] px-4 block `}
            href="/movies"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathName.includes("tv") ? "gradientBg rounded-md text-white" : ""
            } py-[7px] px-4 block `}
            href="/tv"
          >
            TV Shows
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathName == "/search" ? "gradientBg rounded-md text-white" : ""
            } py-[7px] px-4 block `}
            href="/search"
          >
            Search
          </Link>
        </li>
      </ul>
      <h3 className="text-xl font-medium my-6 ms-2">THEME</h3>
      <div className="w-full">
        <DarkModeToggler text={true}/>
      </div>
    </aside>
  );
}
