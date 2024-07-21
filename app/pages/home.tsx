import Image from "next/image";
import {
  SVGAstro,
  SVGBash,
  SVGCSS,
  SVGGitHub,
  SVGGo,
  SVGHTML,
  SVGLinkedin,
  SVGNext,
  SVGNode,
  SVGREACT,
  SVGRust,
  SVGTailwind,
  SVGTypeScript,
} from "@/components/icons";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const HomePage = () => {
  return (
    <section id="home" className="mt-24 p-10 bg-[#8e8e8e]/10">
      <div className="flex justify-center items-center">
        {/* <Image */}
        {/*   src="/id.jpg" */}
        {/*   alt="avatar" */}
        {/*   width={600} */}
        {/*   height={600} */}
        {/*   className="my-10" */}
        {/* /> */}
        <Avatar className="w-56 h-56 my-4">
          <AvatarImage src="/id.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black text-center">
            Software Developer 👋🏿
          </h1>
          <p className="text-center md:text-xl font-medium">
            Hi, I am a Software developer experience in building and maintaining
            responsive, user friendly websites and applications.{" "}
          </p>
          <div className="flex justify-center items-center gap-5 m-4">
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
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-10">
          <h4 className="font-bold underline text-center text-xl md:text-2xl mt-4">
            Tech Stack
          </h4>
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex gap-5">
              <SVGHTML />
              <SVGCSS />
              <SVGTailwind />
              <SVGTypeScript />
            </div>
            <div className="flex gap-5">
              <SVGREACT />
              <SVGNext />
              <SVGAstro />
            </div>
            <div className="flex gap-5">
              <SVGNode />
              <SVGBash />
              <SVGGo />
              <SVGRust />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
