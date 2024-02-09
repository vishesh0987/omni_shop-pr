import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h1 className='fs-1 text-danger'>Meesho</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  fs-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shopping 
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/Menshop'>Men's shopping</Link></li>
            <li><Link className="dropdown-item" to="/Womenshop">Women's shopping</Link></li>

            <li><Link className="dropdown-item" to="/Kidshop">Kid's Shopping</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex mx-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav fs-4 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Sign up</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My cart</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>

  )
}

export default Navbar