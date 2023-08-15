import React from 'react'

// styles
import '../../styles/views/home.scss'
import '../../styles/layouts/project.scss'


import faceLogo from '../../assets/perfil.jpg'
import cppLogo from '../../assets/c.svg'

import { ProjectCard } from '../layouts/ProjectCard'
import { projectsArray } from '../../Data/projectsData'




export const Home = () => {
  return (

    <section className="home-page">
      <div className="first-info-section">
        <div className="left-info">
          <h1>Franco Ramírez Molina, Ingeniero civil informático y también músico</h1>
          <p>
            Soy estudiante de ingenieria civil informatica y telecomunicaciones de la Universidad
            Diego Portales. Apasionado por la muisca y sobre todo por la tecnologia.
            Mis intereses son el desarrollo backend principalmente, en donde manejo
            tecnologias como Node.js, bases de datos, etc.
          </p>

          <div className="icons-info">
            <a href="https://www.instagram.com/frannncoh._/" target='_blank'>
              <i class="fa-brands fa-instagram" />
            </a>
            <a href="https://github.com/Negxh" target='_blank'>
              <i class="fa-brands fa-github" />
            </a>
            <a href="https://linkedin.com/in/franco-ramirez-molina-805976271" target='_blank'>
              <i class="fa-brands fa-linkedin" />
            </a>
            <a href="">
              <i class="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
        <div className="right-info">
          <img src={faceLogo} alt="" />
        </div>
      </div>

      {/* <div className="skills-section">
        <div className="languages">
          <h1>Lenguajes de Programacion</h1>
          <div className="icon-skills">
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-python"></i>
            <i class="fa-brands fa-swift"></i>
          </div>
        </div>
        <div className="backend">
          <h1>Backend</h1>
          <div className="icon-skills">
            <i class="fa-brands fa-node-js"></i>
          </div>
        </div>
        <div className="frontend">
          <h1>Frontend</h1>
          <div className="icon-skills">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-sass"></i>
            <i class="fa-brands fa-react"></i>
          </div>
        </div>
        <div className="database">
          <h1>Database</h1>
          <div className="icon-skills">

          </div>
        </div>
        <div className="other">
          <h1>Others</h1>
          <div className="icon-skills">
            <i class="fa-brands fa-git-alt"></i>
          </div>
        </div>
      </div> */}
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
