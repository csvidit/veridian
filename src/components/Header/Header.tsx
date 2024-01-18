"use client";

import { RxShadowNone } from "react-icons/rx";
import Nav from "./Nav";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Rotate as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <LayoutGroup>
      <motion.header layout layoutRoot className="fixed top-4 lg:top-6 z-40 self-center w-full lg:flex lg:flex-col">
        <motion.div
          layout
          layoutRoot={isTabletOrMobile ? false : true}
          className="rounded-md justify-center max-w-full self-center px-8 py-2 mx-4 lg:mx-6 flex flex-col gap-2 bg-gray-950 bg-opacity-60 border border-gray-800 backdrop-blur-md"
        >
          <motion.div
            layout
            className="flex flex-row gap-2 items-center justify-between lg:justify-start"
          >
            <Link
              href="/"
              className="group text-emerald-500 flex flex-row gap-1 items-center text-lg"
            >
              <Image width={16} height={16} src="/logo.svg" alt="Veridian Logo" className="group-hover:transform group-hover:rotate-45 transition-transform duration-200 ease-in-out" />
              <p className="extended">Veridian</p>
            </Link>
            {isTabletOrMobile ? (
              <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
            ) : (
              <Nav />
            )}
          </motion.div>
          {isTabletOrMobile && (
            <AnimatePresence mode="popLayout">
              {isOpen && <Nav />}
            </AnimatePresence>
          )}
        </motion.div>
      </motion.header>
    </LayoutGroup>
  );
};

export default Header;
