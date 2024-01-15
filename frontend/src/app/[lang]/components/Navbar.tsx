"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`justify-center items-center inline-flex px-8 pt-1 text-md font-medium hover:text-darkGold ${
          path === url && "dark:text-darkGold "
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-darkGold ${
          path === url && "dark:text-darkGold "
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}

export default function Navbar({
  links,
  // logoUrl,
  // logoText,
}: {
  links: Array<NavLink>;
  // logoUrl: string | null;
  // logoText: string | null;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="p-4 ">
      <div className="container flex justify-center h-16 mx-auto px-0 sm:px-6">
        {/* <Logo src={logoUrl}>
          {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
        </Logo> */}

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {links.map((item: NavLink) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        </div>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-40 bg-darkBlueNew bg-opacity-75" />{" "}
          {/* Overlay */}
          <Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-darkBlueNew px-6 py-6 sm:max-w-sm  ">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Strapi</span>
                {/* {logoUrl && <img className="h-8 w-auto" src={logoUrl} alt="" />} */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 text-Gold w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y ">
                <div className="space-y-2 py-6">
                  {links.map((item) => (
                    <MobileNavLink
                      key={item.id}
                      closeMenu={closeMenu}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <button
          className="p-4 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-7 w-7 text-Gold" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
