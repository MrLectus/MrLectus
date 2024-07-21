import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "../store/data";
import Image from "next/image";
import Link from "next/link";
import { SVGGitHub, SVGGlobe } from "@/components/icons";

type Project = (typeof projects)[0];
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="min-h-[430px] flex items-center justify-center flex-col">
      <CardHeader className="text-center">
        <CardTitle className="text-[#60A5FA]">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-fit items-center justify-center">
        <Image
          src={project.picture}
          alt={project.description}
          width={600}
          height={600}
        />
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 w-full justify-end">
          <Link href={project.link} target="_blank">
            <SVGGlobe />
          </Link>
          <Link href={project.gitlink}>
            <SVGGitHub />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

const Project = () => {
  return (
    <section
      id="projects"
      className="p-10 bg-[#8e8e8e]/10 w-full flex flex-col items-center justify-center gap-5"
    >
      <h2 className="text-blue-400 text-center text-xl font-bold">Project</h2>
      <h3 className="text-2xl text-center font-black">
        Each project is unique in it&apos;s own way 😉
      </h3>
      <div className="flex flex-col w-fit justify-center items-center gap-5 p-4 md:grid md:grid-cols-2 md:gap-x-4">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
};

export default Project;
