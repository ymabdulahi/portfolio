import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Background = () => {

  const {darkMode} = useContext(ThemeContext)

  return (
    <div className='section section-margin'>
      <div className='section-background'>
        <div className='section-title'>Background</div>
        <div className='section-content'>
          <p className='paragraph-content'>I'm currently a <span className='key-text'>Computer Science student (MSc)</span> at the <span className='key-test'>University of York</span> and enjoy studying all things tech related! 🤓. In my spare time I moonlight as a freelance <span className='key-text'>Front End Developer</span>and enjoy building things for the web!</p>
          <p className='paragraph-content'>As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</p>
          <p className='paragraph-content'><span className='key-text'>When I'm not in front of a computer screen</span>, I'm probably hiking, playing basketball, or visting the latest art exhibition installation in London.</p>
        </div>
      </div>
      <div className='skills-background'>
        <div className='skills-title'>Skills</div>
        <div className='skills-category'>
          <ul className='skills-list-1'>
            <li className={darkMode ? 'whitee' : 'label'}>Languages</li>
            <li className={darkMode ? 'whitee2' : 'item'}>JavaScript (ES6)</li>
            <li className={darkMode ? 'whitee2' : 'item'}>TypeScript</li>
            <li className={darkMode ? 'whitee2' : 'item'}>HTML</li>
            <li className={darkMode ? 'whitee2' : 'item'}>CSS/Sass</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Python</li>
          </ul>
          <ul className='skills-list-1'>
            <li className={darkMode ? 'whitee' : 'label'}>Frameworks</li>
            <li className={darkMode ? 'whitee2' : 'item'}>React</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Node</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Next JS</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Three JS</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Firebase</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Framer</li>
          </ul> 
          <ul className='skills-list-1'>
            <li className={darkMode ? 'whitee' : 'label'}>Tools</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Git & Github</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Chrome DevTools</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Postman</li>
            <li className={darkMode ? 'whitee2' : 'item'}>Bash</li>
            <li className={darkMode ? 'whitee2' : 'item'}>BitBucket</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Background
