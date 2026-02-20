
import { useState } from "react"

function Slider() {
  const slides = [
    "It all started with our chef and expert tastemaker, Colonel Harland Sanders.",
    "KFC has been serving craveworthy, finger lickin’ good food since 1952.",
    "We have the widest global footprint of any quick service restaurant brand."
  ]

  const [index, setIndex] = useState(0)

  return (
    <section className="slider">
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((text, i) => (
          <div className="slide" key={i}>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="arrow left" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>‹</div>
      <div className="arrow right" onClick={() => setIndex((index + 1) % slides.length)}>›</div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Slider
