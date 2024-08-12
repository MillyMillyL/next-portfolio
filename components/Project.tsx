"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { FolderGit2 } from "lucide-react";
import { Project } from "@/app/projects/[slug]/page";

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
          variant="ghost"
          onClick={toggleFullScreen}
          className="absolute right-2 bottom-2"
        >
          Go Full Screen
        </Button>
      </div>
      <div className="flex justify-center">
        <Button variant="link">Code on Github</Button>
        <Button variant="link">Deployment on Vercel</Button>
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <div>
        <p className="flex gap-2 items-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className=" bg-green-500 py-1 px-2 rounded-sm text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </p>
      </div>

      <p>{project.description}</p>
    </div>
  );
}

export default ProjectComponent;
