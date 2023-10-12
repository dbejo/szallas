export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-color sticky-top navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link my-nav-link text-white" href="/">
                Főoldal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link my-nav-link text-white" href="/rooms">
                Szobák
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link my-nav-link text-white" href="/services">
                Szolgáltatások
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link my-nav-link text-white" href="/booking">
                Foglalás
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
