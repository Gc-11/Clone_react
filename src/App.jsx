import { useState, useEffect } from "react"
import Header from './components/Header'
import Hero from './components/Hero'
import Slider from './components/Slider'
import ImageSection from './components/ImageSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) setDarkMode(saved === "dark")
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className={darkMode ? "dark" : "light"}>
      
      <Header 
        toggleTheme={() => setDarkMode(!darkMode)} 
        darkMode={darkMode} 
      />

      <Hero />
      <Slider />
      
      <ImageSection 
        title="COMPANY"
        text="We’re in the chicken business, but we’re also in the people business."
        image="https://cdn.sanity.io/images/kbqq3e0r/production/0a54ef93e0c66380cad116c40a908ac140956012-974x816.jpg?w=1080&q=100"
        link="https://global.kfc.com/company"
      />
      
      <ImageSection 
        title="BRAND IMPACT"
        text="From kitchens to communities, we’re committed to doing things the right way."
        image="https://cdn.sanity.io/images/kbqq3e0r/production/b8a8ad76969678932a404338e25d6f0936b5dc16-974x816.jpg?w=1080&q=100"
        link="https://global.kfc.com/brand-impact"
      />
      
      <ImageSection 
        title="CAREERS"
        text="Original recipe? Yes. Original careers? We’ve got those, too."
        image="https://cdn.sanity.io/images/kbqq3e0r/production/b00be1eaf913cc4b8f724a5763f1c7d7fca4f7ba-974x816.jpg?w=1080&q=100"
        link="https://careers.global.kfc.com/"
      />

      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
