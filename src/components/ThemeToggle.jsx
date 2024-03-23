import React from 'react'

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/context'

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button type="btn" className="dark-toggle" onClick={toggleTheme}>
        {darkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
