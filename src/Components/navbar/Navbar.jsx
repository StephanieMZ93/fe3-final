import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';
import { LIGHT, DARK } from '../../common/const.js';
import "./navbar.css";

const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

function handleTheme() {
  if(theme === LIGHT) {
    return setTheme({type: DARK, payload: DARK});
  } else {
    return setTheme({type:LIGHT, payload: LIGHT});
  }
}

  return(
    <div>
      <nav className={`navbar navbar-expand-lg ${theme === DARK ? 'navbar-dark bg-dark' : 'bg-light'}`}>
        <div className="container-fluid">
          <div className="navbar-brand col-sm-9">
            <span className="text-danger">D</span>
            <span>H </span>
            <span>Odonto</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favs">Favs</Link>
              </li>
              <li className="nav-item">
                <button className='btnMoon' onClick={handleTheme}>
                  {theme === DARK ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i> }               
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
  )


}

export default Navbar