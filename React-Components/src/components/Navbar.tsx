import React from "react";

type NavLink = { href: string; label: string };

const defaultLinks: NavLink[] = [
  { href: "#", label: "Home" },
  { href: "#", label: "Create" },
  { href: "#", label: "About" },
];

const Navbar: React.FC<{ links?: NavLink[]; brand?: string }> = ({
  links = defaultLinks,
  brand = "My Blog",
}) => {
  return (
    <header className="navbar">
      <div className="brand">{brand}</div>
      <nav className="links">
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
