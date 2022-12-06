import React from 'react'
import './navbar.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // return (
  //   <nav>
  //     {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
  //     {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
  //     <button>Change theme</button>
  //   </nav>
  // )

  return(
  <nav className="navbar navbar-expand-lg bg-light">
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
            <a className="nav-link active" aria-current="page" href="Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Favs">Favs</a>
          </li>
          <li className="nav-item">
            <button className='btnMoon'>
              <i class="fa-solid fa-moon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )


}

export default Navbar