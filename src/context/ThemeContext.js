import React, {useState, createContext}  from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

