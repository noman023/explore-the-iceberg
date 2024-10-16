"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Services",
      path: "/services",
    },
  ];

  return (
    <nav className="flex justify-between items-center bg-green-500 text-white py-3 p-1">
      <div className="text-3xl">
        <Link href={"/"}>Learn Next</Link>
      </div>

      <div>
        <ul className="flex justify-start gap-4">
          {links.map((link) => (
            <li
              key={link.title}
              className={pathName === link.path && "text-slate-700"}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
