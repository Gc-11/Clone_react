
function Hero() {
  return (
    <section 
      className="hero"
      style={{
        backgroundImage: "url('https://cdn.sanity.io/images/kbqq3e0r/production/e144c901de064e9a4d5115472e51c092cc58e348-2880x1622.jpg?w=1080&q=100')"
      }}
    >
      <div className="overlay"></div>
      <div className="stats">
        <div className="stat"><h1>30K+</h1><p>RESTAURANTS</p></div>
        <div className="stat"><h1>1M</h1><p>TEAM MEMBERS</p></div>
        <div className="stat"><h1>150</h1><p>COUNTRIES WITH KFC</p></div>
        <div className="stat"><h1>3.5</h1><p>HOURS BEFORE NEXT KFC IS BUILT</p></div>
      </div>
    </section>
  )
}

export default Hero
