import React from 'react'
import {Link} from 'react-router-dom'
import UserForm from './UserForm'

const Navbar = () => {
  return (
    
    <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link text-white">Home</Link></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning"><Link to='user-form' Component={<UserForm/>}>Sign-up</Link></button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar
