import Link from "next/link";

export default function Navbar() {
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
            <li key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
