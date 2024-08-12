import Image from "next/image";
import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import getProjectsData from "@/lib/getProjectsData";

export type Project = {
  title: string;
  previewUrl: string;
  description: string;
  tags: string[];
  github: string;
};

type Props = {
  params: {
    slug: string;
  };
};

// const ProjectPage = async ({ params }: Props) => {
//   const jsonData: Project[] = await getProjectsData();

//   const project = jsonData.find((p) => p.slug === params.slug);

//   if (!project) {
//     notFound();
//   }

//   const deploymentPlatform = project.Deployment.includes("vercel")
//     ? "See It Live on Vercel"
//     : project.Deployment.includes("netlify")
//     ? "See It Live on Netlify"
//     : "Visit My Deployed Site";

//   return (
//     <div className="container">
//       <h1 className="text-xl font-bold text-center my-8">{project.name}</h1>
//       <div className="w-full ">
//         <Image
//           // src="/projectImages/shadcn-nextjs-dashboard-3lbk.png"
//           src={project.image}
//           alt={project.name}
//           // fill={true}
//           width="2000"
//           height="1000"
//           objectFit="contain"
//         />
//       </div>
//       <div className="flex my-8 justify-between flex-wrap">
//         <div className="flex gap-4 flex-wrap">
//           {project.tags.map((skill) => (
//             <div key={skill} className="py-2 px-4 bg-accent font-semibold">
//               {skill}
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-4">
//           <Button className="underline" variant="link">
//             View Code on GitHub
//           </Button>
//           <Button className="underline" variant="link">
//             {deploymentPlatform}
//           </Button>
//         </div>
//       </div>

//       <p>{project.description}</p>
//     </div>
//   );
// };

const ProjectPage = () => {
  return <div>ProjectPage</div>;
};

export default ProjectPage;
