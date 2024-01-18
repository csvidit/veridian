import Link from "next/link";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";

const InlineLink = (props: { plain?: boolean; noArrow?: boolean; href: string; children: React.ReactNode }) => {
  return (
    <Link
      className={`group inline-flex gap-1 items-center w-fit ${props.plain? "hover:text-emerald-500" : "border-b border-b-neutral-300 hover:border-b-emerald-500 hover:text-opacity-50"} transition-all duration-200 ease-in-out`}
      href={props.href}
      target={props.href.startsWith("https") ? "_blank" : ""}
    >
      {props.children}
      {props.noArrow ? <></> : props.href.startsWith("https") ? <RxArrowTopRight className="group-hover:text-emerald-500 transition-colors duration-200 ease-in-out" /> : <RxArrowRight className="group-hover:text-emerald-500 transition-colors duration-200 ease-in-out" />}
    </Link>
  );
};

export default InlineLink;
