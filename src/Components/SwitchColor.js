import React,{useContext, useEffect} from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../context/ThemeContext'


const SwitchColor = () => {


  const {darkMode, toggleTheme} = useContext(ThemeContext)

  
  useEffect(() => {
    if(darkMode) {
      document.body.style.backgroundColor = '#171c28'
      document.body.style.color = 'white'
      document.querySelector('.email-link').style.color = 'white'
      }
      else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = '#444452'
        document.querySelector('.email-link').style.color = '#444452'

        
      }
  }, [darkMode])


  return (
    <div className='switch-container'>
      <div className='switch-platform'>
        <Switch
          onColor='#F3EA24'
          offColor='#333'
          className='switch-for-dark-mode'
          onChange={toggleTheme}
          checked={darkMode} 
        /> 
      </div> 
    </div>
  )
}

export default SwitchColor
