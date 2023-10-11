export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-color sticky-top">
      <div className="container-fluid">
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
    </nav>
  );
}
