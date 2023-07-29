import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }
  return (
    <div className='container'>
       <h1>Personal Budget</h1>
       <nav>
       {user && (
        <div>
          <span>{user.email}</span>
            <button onClick={handleClick} className='logout'>Log Out</button>
        </div>
        )}
      {!user &&(
        <div>
            <p><Link to="/login"> Login</Link></p>
            <p><Link to="/signup"> Signup</Link></p>
        </div>
      )}
      </nav>
      <p><Link to="/">home</Link></p>
      <p><Link to="/home/view">View</Link></p>
      <p><Link to="/home/set">Set</Link></p>
    </div>
  )
}

export default Navbar