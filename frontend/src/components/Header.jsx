import { VscSignIn, VscSignOut } from 'react-icons/vsc'
import { PiUserCircle } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link
          to='/'
          className='logo-text'
        >
          Querella
        </Link>
      </div>

      <ul>
        <li>
          <Link to='/login'>
            <VscSignIn /> Login
          </Link>  
        </li>
        <li>
          <Link to='/register'>
            <PiUserCircle /> Register
          </Link>  
        </li>
      </ul>
    </header>
  )
}

export default Header
