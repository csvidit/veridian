"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";

const PrimaryLink = (props: {
  noArrow?: boolean;
  href: string;
  children: React.ReactNode;
  internal?: boolean;
  disabled?: boolean;
  className?: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <MotionConfig
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
    >
      <Link
        aria-disabled={props.disabled}
        href={props.disabled ? "" : props.href}
        target={
          !props.disabled && props.href.startsWith("https") && props.internal == false ? "_blank" : ""
        }
        className={`rounded-md bg-opacity-40  transition-all duration-200 ease-in-out ${
          props.disabled
            ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
            : "bg-emerald-950 text-emerald-500 hover:bg-opacity-80"
        } ${props.className}}`}
      >
        <motion.div
          layout
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="px-4 py-2 inline-flex items-center gap-2 "
        >
          {!props.disabled && hover && (
            <AnimatePresence mode="popLayout">
              {!props.noArrow &&
                (props.href.startsWith("https") ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <RxArrowTopRight />
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <RxArrowRight />
                  </motion.span>
                ))}
            </AnimatePresence>
          )}
          <AnimatePresence>
            <motion.span layout>{props.children}</motion.span>
          </AnimatePresence>
          {!props.disabled && !hover && (
            <AnimatePresence mode="popLayout">
              {!props.noArrow &&
                (props.href.startsWith("https") ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <RxArrowTopRight />
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <RxArrowRight />
                  </motion.span>
                ))}
            </AnimatePresence>
          )}
        </motion.div>
      </Link>
    </MotionConfig>
  );
};

export default PrimaryLink;
