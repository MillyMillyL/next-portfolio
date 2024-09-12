"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";

import { Project } from "@/app/projects/[slug]/page";
import Link from "next/link";

function ProjectComponent({ project }: { project: Project }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function toggleFullScreen() {
    const iframe = iframeRef.current;

    if (iframe !== null) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).mozRequestFullScreen) {
        // Firefox
        (iframe as any).mozRequestFullScreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) {
        // IE/Edge
        (iframe as any).msRequestFullscreen();
      }
    }
  }
  return (
    <div>
      <div className="relative mb-6">
        <iframe
          ref={iframeRef}
          src={project.previewUrl}
          className="w-full h-full min-h-[400px] border rounded-xl"
          title={project.previewUrl}
          loading="lazy"
          allowFullScreen
        ></iframe>
        <Button
          variant="link"
          onClick={toggleFullScreen}
          className="absolute right-0 bottom-0 bg-green-500"
        >
          Go Full Screen
        </Button>
      </div>
      <div className="flex justify-between px-2">
        <Button variant="link" asChild>
          <Link href={project.github} target="_blank">
            Github
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={project.previewUrl} target="_blank">
            Website
          </Link>
        </Button>
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="flex gap-2 items-center my-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className=" bg-green-500 py-1 px-2 rounded-sm text-accent-foreground"
          >
            {tag}
          </span>
        ))}
      </p>

      <p>{project.description}</p>
    </div>
  );
}

export default ProjectComponent;
