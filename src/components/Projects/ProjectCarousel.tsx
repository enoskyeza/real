import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  imageUrl: string
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {projects.map((project, index) => (
        <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="relative mx-auto max-w-[500px]">
            <Image src={project.imageUrl} alt={project.title} fill className="max-w-full drop-shadow-three" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
