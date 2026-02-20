
function FullscreenNav({ open, setOpen }) {
  return (
    <div
      className="fullscreenNav"
      style={{ transform: open ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="close" onClick={() => setOpen(false)}>✕</div>
      <a href="#">COMPANY</a>
      <a href="#">BRAND IMPACT</a>
      <a href="#">CAREERS</a>
      <a href="#">NEWSROOM</a>
    </div>
  )
}

export default FullscreenNav
