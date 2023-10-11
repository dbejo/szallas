"use client";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import React, { useState } from "react";

export default function Booking() {
  const [isTelephone, setIsTelephone] = useState(true);

  const formContent = isTelephone ? (
    <div className="card-body">
      <h4 className="card-title">Telefonon</h4>
      <p className="card-text">
        Hívja a <a href="tel:+36121231234">+36 12 123 1234</a> telefonszámot.
      </p>
    </div>
  ) : (
    <div className="card-body">
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
        <button type="submit" className="btn btn-secondary">
          Küldés
        </button>
      </form>
    </div>
  );

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
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className={
                        isTelephone
                          ? "nav-link text-dark active"
                          : "nav-link text-dark"
                      }
                      onClick={() => setIsTelephone(true)}
                    >
                      Telefonon
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        isTelephone
                          ? "nav-link text-dark"
                          : "nav-link active text-dark"
                      }
                      onClick={() => setIsTelephone(!isTelephone)}
                    >
                      Emailben
                    </a>
                  </li>
                </ul>
              </div>
              {formContent}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
