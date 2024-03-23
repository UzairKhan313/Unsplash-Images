import { useState, createContext, useContext, useEffect } from 'react'

const AppContext = createContext()

// function use for getting the theme of the browser of the user.
const getInititalDarkMode = () => {
  const prefersDartMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches

  const storeDarkMode = localStorage.getItem('darkTheme') === 'true'

  return storeDarkMode || prefersDartMode
}

export const GlobalContextProvider = ({ children }) => {
  const [darkTheme, setDarkThem] = useState(getInititalDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')

  const toggleTheme = () => {
    const newDarktheme = !darkTheme
    setDarkThem(newDarktheme)
    localStorage.setItem('darkTheme', darkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme)
  }, [darkTheme])

  return (
    <AppContext.Provider
      value={{ darkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
