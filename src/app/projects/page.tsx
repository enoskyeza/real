import React from 'react';
import Projects from "@/components/Projects/Projects";

interface Props {
    // Define your prop types here
    title?: string;
}

const ProjectsPage: React.FC<Props> = ({title = "Default Title"}) => {
    return (
        <div>
            <Projects />
        </div>
    );
};

export default ProjectsPage;