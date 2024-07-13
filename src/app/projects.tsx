"use client";

import { ProjectCard } from "@/components";
import { sections } from "@/constants";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/AC.jpg",
    title: "Design and supervision of Yejoka Hotel",
    desc: "Design and supervision of Yejoka Hotel by assessing the building, performing load calculations, and creating detailed system designs with efficient zoning and energy-saving technologies. Our supervision included coordinating with contractors, overseeing installation quality and safety, conducting performance testing, and calibrating the system.",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-8" id={sections.projects}>
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Projects
        </Typography>
        {/* <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
