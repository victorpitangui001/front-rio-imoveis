import { Link } from "react-router-dom";
import { useContext } from "react";

import Logo from '../../assets/img/logo.png';
import { Context } from "../../context/UserContext";



function Navbar() {
  const { authenticated, logout } = useContext(Context)

  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a href="/" className="navbar-brand d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
              <img className="img-fluid" src={Logo} alt="Rio Imoveis" style={{ width: 80, height: 80 }} />
            </div>
            <h1 className="m-0 text-primary">Rio Imoveis</h1>
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <li className="nav-item nav-link active mx-2">
                <Link to="/propertie/allproperties" style={{ textDecoration: 'none' }}>Comprar</Link>
              </li>
              {authenticated ? (
                <>
                  <li className="nav-item nav-link active mx-1">
                    <Link to={'/propertie/myinterest'} style={{ textDecoration: 'none' }}>Minhas Visitas Agendadas</Link>
                  </li>
                  
                  <li className="nav-item nav-link active mx-1">
                    <Link to={'/propertie/myproperties'} style={{ textDecoration: 'none' }}>Minhas Propiedades</Link>
                  </li>
                  
                  <li className="nav-item nav-link active mx-1">
                    <Link to={'/user/profile'} style={{ textDecoration: 'none' }}>Perfil</Link>
                  </li>

                  <li onClick={logout} className="nav-item nav-link active mx-1">
                    <Link style={{ textDecoration: 'none' }}>Sair</Link>
                  </li>
                </>
              ) : (

                <>
                  <li className="nav-item nav-link mx-2">
                    <Link to="/login" style={{ textDecoration: 'none' }}>Entrar</Link>
                  </li>
                  <li className="nav-item nav-link mx-2">
                    <Link to="/register" style={{ textDecoration: 'none' }}>Cadastrar</Link>
                  </li>
                </>)

              }


            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar