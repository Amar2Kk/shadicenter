interface NavItem {
  label: string;
  path: string;
  title: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

export const NavItem = [
  {
    id: "home",
    path: "",
    title: "الرئسية",
  },
  {
    id: "aboutDr",
    path: "",
    title: "د/علاء",
  },
  {
    id: "products",
    path: "",
    title: "المنتجات",
  },
  {
    id: "services",
    path: "",
    title: "الخدمات",
  },
  {
    id: "aboutUs",
    path: "",
    title: "عن المركز",
  },
  {
    id: "contact",
    path: "",
    title: "تواصل معنا",
  },
];
