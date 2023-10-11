import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import 'bootstrap/dist/css/bootstrap.css'

export default function Booking() {
    return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar />
        <h1>Hi Booking</h1>
        <Footer />
        </>
    )
  }