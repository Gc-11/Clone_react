
function FullscreenNav({ open, setOpen }) {
  return (
    <div
      className="fullscreenNav"
      style={{ transform: open ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="close" onClick={() => setOpen(false)}>✕</div>

      <a href="https://global.kfc.com/company" target="_blank">COMPANY</a>
      <a href="https://global.kfc.com/brand-impact" target="_blank">BRAND IMPACT</a>
      <a href="https://careers.global.kfc.com/" target="_blank">CAREERS</a>
      <a href="https://global.kfc.com/newsroom" target="_blank">NEWSROOM</a>
    </div>
  )
}

export default FullscreenNav
