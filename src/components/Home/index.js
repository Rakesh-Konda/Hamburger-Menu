// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const Home = () => {
  let a
  return (
    <Link to="/">
      <div className="mid">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home"
        />
      </div>
    </Link>
  )
}
export default Home
