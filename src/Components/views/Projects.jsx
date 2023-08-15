import React from 'react'

// styles
import '../../styles/views/projects.scss'
import '../../styles/layouts/project.scss'

import { ProjectCard } from '../layouts/ProjectCard'
import { projectsArray } from '../../Data/projectsData'

export const Projects = () => {
    return (
        <section className="projects-page">
            <div className="first-info-section">
                <div className="left-info">
                    <h1>Proyectos en los que he trabajdo</h1>
                    <p>
                        En esta seccion encontraras los proyectos que he desarrollado. Ecnontraras tanto
                        proyectos web backend y frontend, de programacion en diferentes lenguajes y hasta
                        de hardware con Arduino.
                    </p>
                </div>
            </div>

            <div className="project-section">
                <div className="cards-container">
                    {projectsArray.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
