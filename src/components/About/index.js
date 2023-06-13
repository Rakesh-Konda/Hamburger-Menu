// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const About = () => {
  let a
  return (
    <Link to="/about">
      <div className="mid">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
          alt="about"
          className="home"
        />
      </div>
    </Link>
  )
}
export default About
