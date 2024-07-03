import Image from "next/image";

const About = () => {
  return (
    <section id="about" className=" p-10">
      <div className="flex flex-col gap-4 m-4 justify-center items-center">
        <Image
          width={1024}
          height={720}
          className="w-[80%] rounded-xl drop-shadow-xl"
          src="/coding.jpg"
          alt="coding"
        />
        <h2 className="text-blue-400 text-center text-xl font-bold">
          About Me
        </h2>
        <h3 className="text-2xl text-center font-black">
          A dedicated software Engineer based in Abuja, Nigeria
        </h3>
        <p className="text-center opacity-75 text-xl font-medium">
          Hello! I&apos;m a tech enthusiast with expertise in both frontend and
          backend development. I specialize in creating visually appealing and
          user-friendly interfaces, seamlessly integrated with robust backend
          solutions. My skills extend to system administration, allowing me to
          optimize the entire technology stack. Let&apos;s build innovative
          solutions together!
        </p>
      </div>
    </section>
  );
};

export default About;
