import React from 'react'
import '../../styles/layouts/project.scss'

export const ProjectCard = ({ project }) => {
    return (
        <div className="card-project">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="link">
                <i class="fa-solid fa-link"></i>
                <a href={project.link}>View project</a>
            </div>
        </div>
    )
}
