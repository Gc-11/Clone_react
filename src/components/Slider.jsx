
import { useState } from "react"

function Slider() {
  const slides = [
    { text: "It all started with our chef and expert tastemaker, Colonel Harland Sanders." },
    { text: "KFC has been serving finger lickin’ good food since 1952." },
    { text: "We have the widest global footprint of any quick service restaurant brand." }
  ]

  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % slides.length)
  const prev = () => setIndex((index - 1 + slides.length) % slides.length)

  return (
    <section className="slider">
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>

      <div className="arrow left" onClick={prev}>‹</div>
      <div className="arrow right" onClick={next}>›</div>

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
