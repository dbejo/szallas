import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Footer() {
    return (
        <footer className="bg-light">
      <div className="row p-1">
        <div className="col-sm-1"></div>
        <div className="col-sm-3 pt-3 pb-3">
          <iframe className="rounded" id="map" src="https://www.openstreetmap.org/export/embed.html?bbox=18.74422073364258%2C47.871568224354306%2C18.948841094970707%2C47.977742280760104&amp;layer=mapnik"></iframe>
        </div>
        <div className="col-sm-4 pt-3 pb-3">
          <ul>
            <li className="footer-menu-item">
          <i className="bi bi-globe h4"></i>: <a href="https://www.openstreetmap.org/#map=13/47.9247/18.8465">2634 Nagybörzsöny, Valami utca 12.</a>
        </li>
        <li className="footer-menu-item">
          <i className="bi bi-telephone-inbound-fill h4"></i>: <a href="tel:+36121231234">+ 36 12 123 1234</a>
        </li>
        <li className="footer-menu-item">
          <i className="bi bi-envelope h4"></i>: <a href="mailto: example@mail.com">example@mail.com</a>
        </li>
        </ul>
        </div>
        <div className="col-sm-3 pt-3 pb-3">
          <ul>
            <li className="footer-menu-item">
              <a href="/">Főoldal</a>
            </li>
            <li className="footer-menu-item">
              <a href="/rooms">Szobák</a>
            </li>
            <li className="footer-menu-item">
              <a href="/services">Szolgáltatások</a>
            </li>
            <li className="footer-menu-item">
              <a href="/booking">Foglalás</a>
            </li>
          </ul>
      </div>
      <div className="col-sm-1"></div>
      </div>
      <div className="bg-secondary text-white p-2 text-center"><p className="mb-0">2023 Bejó Dávid</p></div>
    </footer>
    )
}