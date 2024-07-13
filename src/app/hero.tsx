"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { sections } from "@/constants";

function Hero() {
  return (
    <header className="bg-white p-8" id={sections.home}>
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to <br /> BBNH HVAC Solutions
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            We specialize in providing top-tier supervision and design services
            in the HVAC industry. Our experienced professionals are committed to
            ensuring every project is executed with precision and efficiency.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/HVAC.jpg"
          className="h-[36rem] w-full rounded-xl object-cover object-right border border-gray-300"
        />
      </div>
    </header>
  );
}

export default Hero;
