"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { sections } from "@/constants";

export function Team() {
  const [active, setActive] = React.useState(1);
  const teams = [
    {
      id: 1,
      firstName: "Biniyam",
      lastName: "Mekonnen",
      expertise: "HVAC Supervisor & Designer",
      expertiseDescription:
        "Extensive experience in design and supervision of Hospitals, Hotels, and similar projects",
      educationalBackground: "Msc. in Thermal Engineering",
      email: "biniyammek@gmail.com",
      image: "/image/team/biniyam.jpg",
    },
    {
      id: 2,
      firstName: "Natnael",
      lastName: "Sitotaw",
      expertise: "Thermal Engineering expert",
      expertiseDescription:
        "In depth experience in renewable energy and HVAC research",
      educationalBackground: "Msc. in Thermal Engineering (PHD candidate)",
      email: "sitotawnati2017@gmail.com",
      image: "/image/team/nati.jpg",
    },
    {
      id: 3,
      firstName: "Betsegaw",
      lastName: "Gashu",
      expertise: "Thermal Engineering expert",
      expertiseDescription:
        "In depth experience in renewable energy and HVAC research",
      educationalBackground: "Msc. in Thermal Engineering",
      email: "gashubetsegaw@gmail.com",
      image: "/image/team/betsegaw.jpg",
    },
    {
      id: 4,
      firstName: "Haleluya",
      lastName: "Ahmed",
      expertise: "Industrial maintenance expert",
      expertiseDescription:
        "More than 3 years of experience in industrial maintenance",
      educationalBackground: "Bsc. in Mechanical Engineering",
      email: "haleluyaahmed@gmail.com",
      image: "",
    },
  ];
  function getSelectedMember(id: number) {
    return teams.filter((teamMember) => teamMember.id === active)[0];
  }
  const selectedMember = getSelectedMember(active);
  return (
    <section className="py-12 px-8 lg:py-24" id={sections.aboutUs}>
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Our Team
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Meet our expert team specializing in HVAC design and supervision.
            With deep industry knowledge and a commitment to excellence, we
            deliver innovative and efficient solutions for all your HVAC needs.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {selectedMember.expertise}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {selectedMember.expertiseDescription}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {selectedMember.firstName} -{" "}
                {selectedMember.educationalBackground}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {selectedMember.email}
              </Typography>
              <div className="flex items-center gap-4">
                {teams.map((teamMember) => (
                  <>
                    <Avatar
                      variant="rounded"
                      src={teamMember.image}
                      alt={`${teamMember.firstName} ${teamMember.lastName}`}
                      size="sm"
                      className={`cursor-pointer ${
                        active === teamMember.id ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(teamMember.id)}
                      key={teamMember.id}
                    />
                    <div
                      className="w-[1px] h-[36px] bg-blue-gray-100 "
                      key={teamMember.id}
                    ></div>
                  </>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={selectedMember.image}
                className="h-full rounded-lg w-full object-cover object-top"
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto my-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Mission
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Our mission is to ensure your heating, ventilation, and air
          conditioning projects are executed flawlessly, from initial design to
          final supervision.
        </Typography>
      </div>
      <div className="container mx-auto my-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Vision
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Our vision is to be a leading HVAC design and supervision firm
          recognized for our expertise, reliability, and dedication to
          sustainable practices. We aim to set the industry standard for
          excellence, transforming environments and enhancing the quality of
          life for our clients through cutting-edge HVAC solutions.
        </Typography>
      </div>
    </section>
  );
}

export default Team;
