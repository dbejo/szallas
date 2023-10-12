import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import RoomCard from "../RoomCard";

export default function Rooms() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm pt-3">
            <h1>Szobáink</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm py-3">
            <RoomCard
              id="bedRoom1"
              title={"Standard egyágyas szoba"}
              text={
                "Modern és fiatalos egyágyas szobáinkban az egyedül érkező vendégeik is komfortosan érezhetik magukat, a minőségi pihenés érdekében 160*200 cm-es ágy található szobáinkban. "
              }
              images={[
                "/images/szoba1/kep1.jpeg",
                "/images/szoba1/kep2.jpeg",
                "/images/szoba1/kep3.jpeg",
                "/images/szoba1/kep4.jpeg",
              ]}
              size={"15-18"}
              capacity={1}
              bed={"1db franciaágy (160cm x 200cm)"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm py-3">
            <RoomCard
              id="bedRoom2"
              title={"Standard kétágyas szoba"}
              text={
                "Modern és fiatalos Standard szobáinkban kényelmesen érezhetik magukat vendégeink akár a franciaágyas akár a két egyszemélyes ággyal rendelkező lehetőséget választják, szobáinkból élvezhetik a nyugodt Ipolyra és környékére nyíló kilátást. "
              }
              images={[
                "/images/szoba2/kep1.jpeg",
                "/images/szoba2/kep2.jpeg",
                "/images/szoba2/kep3.jpeg",
                "/images/szoba2/kep4.jpeg",
                "/images/szoba1/kep3.jpeg",
                "/images/szoba1/kep4.jpeg",
              ]}
              size={"16-20"}
              capacity={2}
              bed={
                "1db franciaágy (180cm x 200cm) vagy 2db egyszemélyes ágy (90cm x 200cm)"
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
