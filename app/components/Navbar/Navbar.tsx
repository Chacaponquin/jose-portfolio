"use client";

import Home from "@/app/shared/icons/components/Home";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const options = [
  { name: "Home", icon: Home, link: "/" },
  { name: "About", icon: Home, link: "/about" },
  { name: "Skills & Technologies", icon: Home, link: "/skills" },
  { name: "Projects", icon: Home, link: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-end p-1 fixed top-4 right-4 bg-white shadow-lg rounded-full z-10">
      <div className="flex items-center gap-x-1 rounded-md">
        {options.map((o, index) => (
          <Link
            key={index}
            href={o.link}
            className={clsx(
              "rounded-full",
              "px-3.5 py-2",
              "flex items-center gap-x-2",
              "transition-all duration-200",
              "cursor-pointer",

              {
                "stroke-gray-700 text-gray-700 hover:bg-primary/20 hover:stroke-primary hover:text-primary":
                  pathname !== o.link,
                "bg-primary/20 stroke-primary text-primary":
                  pathname === o.link,
              }
            )}
          >
            <i className="">{o.icon({ size: 18 })}</i>

            <p className="font-title-medium! text-sm sm:inline hidden">
              {o.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
