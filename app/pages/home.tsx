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
const HomePage = () => {
  return (
    <section id="home" className="mt-24 p-10 bg-[#8e8e8e]/10">
      <div className="flex justify-center items-center">
        <Image
          src="/avatar.png"
          alt="avatar"
          width={600}
          height={600}
          className="my-10"
        />
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
          <div className="flex justify-center items-center space-x-5 m-4">
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
        <div className="flex flex-col space-y-10">
          <h4 className="font-bold underline text-center text-xl md:text-2xl mt-4">
            Tech Stack
          </h4>
          <div className="flex flex-col space-y-10 justify-center items-center">
            <div className="flex space-x-5">
              <SVGHTML />
              <SVGCSS />
              <SVGTailwind />
              <SVGTypeScript />
            </div>
            <div className="flex space-x-5">
              <SVGREACT />
              <SVGNext />
              <SVGAstro />
            </div>
            <div className="flex space-x-5">
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
