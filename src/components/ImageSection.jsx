
function ImageSection({ title, text, image }) {
  return (
    <section 
      className="image-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <div className="section-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  )
}

export default ImageSection
