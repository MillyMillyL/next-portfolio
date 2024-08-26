"use client";
import React, { useState } from "react";
import Project from "./Project";
import { Toggle } from "@/components/ui/toggle";

const projectList = [
  {
    title: "Shadcn Dashboard",
    previewUrl: "https://shadcn-dashboard-3lkd.vercel.app/",
    tags: ["HTML", "CSS"],
    description: "description",
    github: "",
  },
  {
    title: "NextJs Auth V5",
    previewUrl: "https://next-auth-v5-psi.vercel.app/",
    tags: ["JavaScript", "HTML"],
    description: "description",
    github: "",
  },
  {
    title: "NextJS Dashboard",
    previewUrl: "https://nextjs-dashboard-nextdoc.vercel.app/",
    tags: ["JavaScript", "React"],
    description: "description",
    github: "",
  },
  {
    title: "Calculator with 3 themes",
    previewUrl: "https://calc-css-variables-3-themes.netlify.app/",
    tags: ["CSS", "HTML", "Javascript"],
    description: "description",
    github: "",
  },
  {
    title: "Split Bill with friends",
    previewUrl: "https://split-bill-with-friends-app.netlify.app/",
    tags: ["NextJS", "React"],
    description: "description",
    github: "",
  },
  {
    title: "Youtube clone with vite & react",
    previewUrl: "https://youtube-home-cloneness.netlify.app/",
    tags: ["React"],
    description: "description",
    github: "",
  },
  {
    title: "Todos",
    previewUrl: "https://todolist-reactjs-usestate.netlify.app/",
    tags: ["React"],
    description: "description",
    github: "",
  },
  {
    title: "Upload Image",
    previewUrl: "https://upload-video-nextjs.netlify.app/",
    tags: ["NextJS"],
    description: "description",
    github: "",
  },
  {
    title: "Send Contacts to Google Sheet",
    previewUrl: "https://send-contact-to-google-sheet.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "description",
    github: "https://github.com/MillyMillyL/contactform-googlesheet",
  },
];

const tags = [
  { id: 1, tagName: "All" },
  { id: 2, tagName: "HTML" },
  { id: 3, tagName: "CSS" },
  { id: 4, tagName: "JavaScript" },
  { id: 5, tagName: "React" },
  { id: 6, tagName: "NextJS" },
];

function Projects() {
  const [activeTag, setActiveTag] = useState<string>("All");

  function toggleTag(tag: string) {
    setActiveTag((prevTag) => (prevTag === tag ? "All" : tag));
  }

  const projectsInfo =
    activeTag === "All"
      ? "Showing all projects. Click any tag to filter!"
      : `Showing projects with the tag of ${activeTag}`;

  const filteredProjects =
    activeTag === "All"
      ? projectList
      : projectList.filter((project) => project.tags.includes(activeTag));

  return (
    <div
      className="container bg-gradient-to-b from-white to-gray-50 mb-16"
      id="projects"
    >
      <h2 className="text-3xl font-bold my-8 text-center">Projects</h2>

      <div className="py-4 mb-4 ">
        <div className="flex gap-4 flex-wrap mb-4">
          {tags.map((tag) => (
            <Toggle
              key={tag.id}
              size="lg"
              onPressedChange={() => toggleTag(tag.tagName)}
              data-state={activeTag === tag.tagName ? "on" : "off"}
              className="font-semibold text-lg"
            >
              {tag.tagName}
            </Toggle>
          ))}
        </div>
        <p className="text-sm pl-2">{projectsInfo}</p>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-12 ">
        {filteredProjects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
