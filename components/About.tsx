"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FolderGit2 } from "lucide-react";
import { Linkedin } from "lucide-react";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Node JS",
    "Express",
    "Next JS",
    "Prisma",
    "MongoDB",
    "ZOD",
    "ShadCN",
  ];
  return (
    <div
      className="container my-16 grid gap-4 md:grid-cols-2 bg-gradient-to-b from-white to-gray-50"
      id="about"
    >
      <div className="flex flex-col items-center text-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/profile.png"
            alt="profile"
            width="300"
            height="300"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4 p-2 md:w-2/3">
          <p>Hello, I&apos;m</p>
          <h2 className="text-3xl font-bold">Milly Liu</h2>
          <p className="text-lg font-semibold">
            Self-taught frontend developer proficient in HTML, CSS, and
            JavaScript. Specialized in React, Tailwind CSS, MUI, and TypeScript.
            Passionate about creating responsive and dynamic user interfaces
            with a keen eye for design and functionality.
          </p>

          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="font-bold" asChild>
              <Link href="#" className="font-bold">
                <FolderGit2 className="mr-2" />
                Github
              </Link>
            </Button>
            <Button variant="outline" className="font-bold" asChild>
              <Link href="#">
                <Linkedin className="mr-2" />
                Linkedin
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-6 ">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="flex gap-4 flex-wrap lg:w-2/3">
          {skills.map((skill) => (
            <div key={skill} className="py-2 px-4 bg-accent font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
