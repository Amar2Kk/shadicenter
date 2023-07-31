// components/NavBar.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  path: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200">
      <div className="logo">
        <Image
          src="/Logo.png"
          width={16}
          height={16}
          alt="Logo"
          className="h-10"
        />
      </div>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.path}
              className="text-gray-800 hover:text-blue-600"
            >{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="cta-button">
        <button className="px-4 py-2 text-white bg-blue-600 rounded">
          Call to Action
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
