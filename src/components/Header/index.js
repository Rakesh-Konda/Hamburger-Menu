// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

// const Header = () => {
//   let a
//   return (
//     <div>
//       <nav className="cen">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
//           alt="website logo"
//           className="logo"
//         />
//         <GiHamburgerMenu className="hai" />
//       </nav>
//       <hr />
//     </div>
//   )
// }

const Header = () => {
  let a
  return (
    <div>
      <nav className="cen">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="trigger-button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hai" />
            </button>
          }
        >
          {close => (
            <div className="bac">
              <ul>
                <li className="hc">
                  <Link className="hc" to="/" onClick={() => close()}>
                    <AiFillHome className="hi" />
                    <h1>Home</h1>
                  </Link>
                </li>

                <li className="hc">
                  <Link className="hc" to="/about" onClick={() => close()}>
                    <BsInfoCircleFill className="hi" />
                    <h1>About</h1>
                  </Link>
                </li>
              </ul>
              <button
                data-testid="closeButton"
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose className="hai" />
              </button>
            </div>
          )}
        </Popup>
      </nav>
      <hr />
    </div>
  )
}

export default Header
