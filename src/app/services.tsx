"use client";

import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { sections } from "@/constants";

const SKILLS = [
  {
    icon: SwatchIcon,
    title: "Custom HVAC Solutions",
    children: "Tailored designs for optimal performance and energy efficiency.",
  },

  {
    icon: EyeIcon,
    title: "Sustainable Design",
    children:
      " Incorporating the latest sustainable technologies and practices.",
  },
  {
    icon: DocumentTextIcon,
    title: "Cutting-Edge Technology",
    children:
      "Utilizing advanced software and tools for precise and reliable designs.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Quality Assurance",
    children: "Ensuring compliance with industry standards and specifications.",
  },
  {
    icon: FingerPrintIcon,
    title: "Safety Management",
    children:
      " Implementing stringent safety protocols for a secure working environment.",
  },
];

export function Services() {
  return (
    <section className="pt-16" id={sections.services}>
      <div className="container mx-auto my-20 text-center mt-8 ">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Services
        </Typography>

        <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
