"use client";
import { useState } from "react";

import { NavItem } from "../content-config";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src="/logo.png" width={64} height={64} alt="logo" />
      {/* <a className="text-black text-2xl font-semibold ">مركز شادي</a> */}
      <ul className="list-none sm:flex hidden justify-end items-start flex-1">
        {NavItem.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] hover:text-secondary ${
              index === NavItem.length - 1 ? "ml-0" : "ml-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* <Link
        href="/"
        className="bg-green-500 hover:bg-green-700 text-white hover:text-black font-bold py-2 px-2 mx-4 rounded"
      >
        احجز موعد
      </Link> */}
      {/* mobile */}
      <div className="flex flex-1 sm:hidden justify-end items-center">
        <Image
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="nav-toggle"
          width={28}
          height={28}
          className="cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-green-gradient absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {NavItem.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer hover:text-primary text-[16px] ${
                  index === NavItem.length - 1 ? "ml-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
