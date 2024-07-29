import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import CategoryButtons from "./CategoryButtons";
import ProjectCarousel from "./ProjectCarousel";
import Link from "next/link";
import {useState} from "react";

const categories = ["All", "Commercial", "Religious", "Residential", "Interior Design"];

const projects = [
  {
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-1.jpg",
  },
  {
    title: "TEREGO DISTRICT LOCAL GOVERNMENT ADMINISTRATIVE BLOCK",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-2.jpg",
  },
  {
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-3.jpg",
  },
];


interface ListProps {
  text: string;
}

const ProjectSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="projects"
             className="pt-16 md:pt-20 lg:pt-28 flex items-center justify-center"
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-start">

            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                  subtitle="OUR PROJECTS"
                title="Explore some of our projects and work"
                paragraph=" "
                mb="44px"
              />
            </div>
              <div className="w-full px-4 lg:w-1/2">
                  <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                      <button type="button"
                              className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All
                          categories
                      </button>
                      <button type="button"
                              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes
                      </button>
                      <button type="button"
                              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags
                      </button>
                      <button type="button"
                              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics
                      </button>
                      <button type="button"
                              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming
                      </button>
                  </div>
              </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px]">
                <Image
                  src="/images/about/about-1-01.jpg"
                  alt="about-image"
                  fill
                  className="max-w-full drop-shadow-three lg:mr-0"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;



