import Head from "next/head";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./footer";


export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <h1>Hi </h1>
    <Footer />
    </>
  )
}