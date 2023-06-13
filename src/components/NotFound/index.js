// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  let a
  return (
    <div>
      <div className="cc">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not"
        />
      </div>
      <div className="cv">
        <h1>Lost Your Way?</h1>
        <p>
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  )
}
export default NotFound
