import Link from "next/link";
import { SVGGitHub, SVGLinkedin } from "./icons";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-around h-24 text-white  items-center bg-[#2d2e32]">
      <div>
        <p className="text-xl">
          Copy &copy; {new Date().getUTCFullYear()} All rights reserved
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/abdulwaheed-j-64561494"
        >
          <SVGLinkedin />
        </Link>
        <Link target="_blank" href="https://www.github.com/mrlectus">
          <SVGGitHub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
