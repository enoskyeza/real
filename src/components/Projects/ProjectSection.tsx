'use client'
import {useState} from "react";
import {projects, categories} from "@/components/data"
import SectionTitle from "../Common/SectionTitle";
import CategoryButtons from "@/components/Projects/CategoryButton";
import ProjectCarousel from "@/components/Projects/projectCarousel";


interface ListProps {
    text: string;
}

const ProjectSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    // Filter projects based on activeCategory
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);


    return (
        <section id="projects"
                 className="pt-16 md:pt-20 lg:pt-28 flex items-center justify-center"
        >
            <div className="container custom-container">
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
                        <div className="w-full px-4 lg:w-1/2 flex justify-end">
                            <CategoryButtons
                                categories={categories}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        </div>

                        <div className="w-full px-4 pt-0 pb-8 ">
                            {/*<Carousel projects={projects} />*/}
                            <ProjectCarousel projects={filteredProjects}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;


// <div className="w-full px-4 lg:w-1/2">
//     <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
//         <button type="button"
//                 className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All
//             categories
//         </button>
//         <button type="button"
//                 className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes
//         </button>
//         <button type="button"
//                 className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags
//         </button>
//         <button type="button"
//                 className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics
//         </button>
{/*        <button type="button"*/
}
{/*                className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming*/
}
{/*        </button>*/
}
{/*    </div>*/
}
{/*</div>*/
}


