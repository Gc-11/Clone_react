function ImageSection({ title, text, image, link }) {
  return (
    <section 
      className="image-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>

      <div className="section-content">
        <h2>{title}</h2>
        <p>{text}</p>

        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="btn">
            Learn More
          </button>
        </a>

      </div>
    </section>
  )
}

export default ImageSection
