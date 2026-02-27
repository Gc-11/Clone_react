import { useState } from "react"
import FullscreenNav from "./FullscreenNav"

function Header({ toggleTheme, darkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg" 
          alt="KFC" 
        />

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          
        
          <button 
            onClick={toggleTheme} 
            className="theme-btn"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="menu" onClick={() => setOpen(true)}>☰</div>
        </div>
      </header>

      <FullscreenNav open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
