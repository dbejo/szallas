import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Booking() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm pt-3">
            <h1>Foglalás</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm py-3">
            <div className="card w-100">
              <div className="card-body">
                <h4 className="card-title">Telefonon</h4>
                <p className="card-text">
                  Hívja a <a href="tel:+36121231234">+36 12 123 1234 </a>
                  telefonszámot.
                </p>
                <h4 className="card-title">Emailben</h4>
                <form>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Név</span>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">Üzenet</span>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check1"
                      required
                    />
                    <label className="form-check-label" htmlFor="check1">
                      Elfogadom a <a href="#">ÁSZF</a> feltételeit
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Küldés
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
