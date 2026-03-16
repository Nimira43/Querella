import { VscSignIn, VscSignOut } from 'react-icons/vsc'
import { PiUserCircle } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../feature/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth) 

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
        {user ? (
          <li>
            <button 
              className='btn btn-main'
              onClick={onLogout}
            >
              <VscSignOut /> Logout
            </button>
          </li>
        ) : (
          <>
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
          </>
        )}      
      </ul>
    </header>
  )
}

export default Header
