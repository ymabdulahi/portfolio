import React from 'react'
import movie from '../Images/image1.png'
import form from '../Images/image2.png'
import model from '../Images/image3.png'
import { BsGithub } from 'react-icons/bs'


const Projects = () => {

  return (
    <div className='section section-projects'>
      <div className='section-projects-background'>
        <div className='section-projects-title'>Featured Projects</div>
        <div className='section-projects-content'>
          <div className='parent-text-and-image'>
            <a href=''><img src={movie} alt='movie-website' className='images image1' /></a>
            <h5 style={{color: '#007bff', fontWeight: 500, fontSize: '16px'}} className='project-title'>Movie API</h5>
            <p className='project-description'>Movie search API project built using react. Made by utilising the useEffect hook and use State hook to show popular movies and searchable movies.</p>
          </div>
          <div className='parent-text-and-image second-section'>
            <a href=''><img src={form} alt='Form-website' className='images image2' /></a>
            <h5 style={{color: '#007bff', fontWeight: 500, fontSize: '16px'}} className='project-title-2'>Form Validation (Hooks)</h5>
            <p className='project-description-2'>This is a Form Validation project created using custom hooks, state, useEffect and also a Validation function. I wanted to build upon my knowledge of state and useEffect hook in order to make this project into a reality. </p>
          </div>
          <div className='parent-text-and-image second-section'>
            <a href=''><img src={model} alt='movie-website' className='images image3' /></a>
            <h5 style={{color: '#007bff', fontWeight: 500, fontSize: '16px'}} className='project-title-3'>Framer Motion project</h5>
            <p className='project-description-3'>I built this project using Framer Motion, React Intersection Observation API, useAnimation hook, useViewportscroll hook, useTransform hook, Progressive Images, useEffect hook and React Router. I wanted to achieve a seamless transition from the homepage to the model page.</p>
          </div>
        </div>
        <h3 className='intro-tagline github-title'>View my other Projects!<span className='finger-right-emoji github-emoji'>👉</span><a className='email-link border-bottom' href= "https://github.com/ymabdulahi"><BsGithub size={30} className='github-logo'/></a></h3>
        <div className='footer-section'>
          <div className='footernav'>
            <h2 className='footer-heading'>Developed by Yonis 🤘 </h2>
            <div className='span-arrangment'>
              <span className='footer-span'><a href = "mailto: ymabdulahi@gmail.com" className='bof bofA'>Email</a></span>
              <span className='footer-span'><a href='https://www.linkedin.com/in/yonisabdulahi/' className='bof'>LinkedIn</a></span>
              <span className='footer-span'><a href='https://github.com/ymabdulahi' className='bof'>Github</a></span>
              <span className='footer-span'><a href='https://www.instagram.com/' className='bof'>Instagram</a></span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
