"use client"

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavItem = (props: {
  href: string;
  children: React.ReactNode;
  index: number;
  hoveredButtonId: any;
  setHoveredButtonId: any;
}) => {
  const [hover, setHover] = useState(false);
  const pathName = usePathname()
  return (
    <MotionConfig
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
    >
      <motion.li
        onHoverStart={() => props.setHoveredButtonId(props.index)}
        onHoverEnd={() => props.setHoveredButtonId(null)}
        className="group relative text-gray-100 px-4 py-1"
      >
        <Link className="inline-flex" href={props.href}>
          <motion.span className={`z-20 group-hover:text-gray-300 transition-all duration-200 ease-in-out border-b  ${pathName == props.href ? "border-b border-b-emerald-500 group-hover:border-transparent" : "border-b-transparent"} `}>{props.children}</motion.span>
          <AnimatePresence>
            {props.hoveredButtonId == props.index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                layoutId="nav-item-highlight"
                className="w-full h-full rounded-md absolute top-0 right-0 bg-gray-800"
              />
            )}
          </AnimatePresence>
        </Link>
      </motion.li>
    </MotionConfig>
  );
};

export default NavItem;
