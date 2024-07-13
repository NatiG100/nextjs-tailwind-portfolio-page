import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  WrenchScrewdriverIcon,
  FolderIcon,
  UsersIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { sections } from "@/constants";
import { Link } from "react-scroll";

const NAV_MENU = [
  {
    name: "Services",
    icon: WrenchScrewdriverIcon,
    href: `${sections.services}`,
  },
  {
    name: "Projects",
    icon: FolderIcon,
    href: `${sections.projects}`,
  },
  {
    name: "About Us",
    icon: UsersIcon,
    href: `${sections.aboutUs}`,
  },
  {
    name: "Contact Us",
    icon: AtSymbolIcon,
    href: `${sections.contactUs}`,
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <Link smooth to={href || ""} duration={500} className="cursor-pointer">
      <Typography
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          smooth
          to={`${sections.home}`}
          duration={500}
          className="cursor-pointer"
        >
          <Image
            height={400}
            width={1000}
            className="h-14 w-max"
            alt="Logo"
            src="/logos/logo.svg"
          />
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text">Sign In</Button>
          <Link to={"mailto:gashubetsegaw@fakeemail.com"} target="_blank">
            <Button color="gray">Say Hello</Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Sign In</Button>
            <Link to={"mailto:gashubetsegaw@fakeemail.com"} target="_blank">
              <Button color="gray">Say Hello</Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
