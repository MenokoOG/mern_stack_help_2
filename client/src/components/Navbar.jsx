import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Navbar(props) {
  const { logout } = props
  const { theme, toggleTheme } = useTheme();

  const handleChangeTheme = (newTheme) => {
    toggleTheme(newTheme);
  };
  return (
    <header>
    <nav>
      <ul>
        <li><a href="/">MERN</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/planning">Planning Tips</a></li>
        <li><a href="https://www.notion.so/" target="_blank">Notion </a></li>
        
        <li>
        <label htmlFor="theme">Change Theme:</label>
          <select value={theme} onChange={(e) => handleChangeTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="fun">Fun</option>
            <option value="serious">Serious</option>
            <option value="space">Space</option>
            
          </select>
        </li>
      </ul>
      <button onClick={logout}>Logout</button>
    </nav>
  </header>
  )
}

export default Navbar