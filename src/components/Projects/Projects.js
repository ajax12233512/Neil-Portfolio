import React from 'react';
import Project from './Project';
import ProjectList from './ProjectList';

function Projects() {
    return (
        <div id='projects' className='projects'>
            <h2 className='projects-label'>Projects</h2>
            {ProjectList.map((project, index) => {
                return(
                    <Project 
                        title={project.title}
                        description={project.description}
                        img_src={project.img_src} 
                        link={project.link}
                        github={project.github}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Projects
