
import { useState } from "react"
import FullscreenNav from "./FullscreenNav"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg" alt="KFC" />
        <div className="menu" onClick={() => setOpen(true)}>☰</div>
      </header>
      <FullscreenNav open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
