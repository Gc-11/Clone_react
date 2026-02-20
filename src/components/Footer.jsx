
import { useState } from "react"

function Footer() {
  const [active, setActive] = useState(null)

  const sections = {
    COMPANY: ["Our Ambitions", "Our Leadership", "Our History"],
    "BRAND IMPACT": ["People & Communities", "Chicken & Nutrition"],
    CAREERS: ["Who We Are", "Working Here"],
    NEWSROOM: ["Press Releases", "Blog"]
  }

  return (
    <footer>
      {Object.keys(sections).map((title, index) => (
        <div key={index}>
          <div
            className="footer-item"
            onClick={() => setActive(active === index ? null : index)}
          >
            {title} <span>⌄</span>
          </div>

          {active === index && (
            <div className="dropdown-content">
              {sections[title].map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="footer-bottom">
        © 2026 Yum! Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
