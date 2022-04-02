import React from 'react'
import './Project.css'

export default function Project(props) {
    return (
        <div className='project-ctn'>
            <a href={props.link} className='project'>   
                <div className="project-img-ctn">
                    <img className='project-img' alt='project' src={props.img_src}/>
                </div>
                <div className='project-body'>
                    <h2 className='project-title'>{props.title}</h2>
                    <p className='project-description'>{props.description}</p>
                </div>
            </a>
            <a href={props.github} className='project-github fab fa-github'>

            </a>
        </div>

    )
}
