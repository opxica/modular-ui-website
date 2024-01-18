import Link from "next/link";

const NavLinks = [
  { title: "Docs", path: "/" },
  { title: "Components", path: "/" },
  { title: "FAQs", path: "/" },
];

export const Navbar = () => {
  return (
    <div>
      <nav aria-label="Global" className="hidden md:block">
        <div className="flex items-center gap-6 text-sm">
          {NavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="font-medium text-gray-100 hover:text-gray-100/75"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
