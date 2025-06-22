 export interface NavLink {
  name: string;
  href: string;
}

  export const navLinks :NavLink[]= [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Collab", href: "/collab" },
  ];