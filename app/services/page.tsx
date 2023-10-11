import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import Card from "../card";

export default function Services() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-sm py-3">
            <h1>Szolgáltatásaink</h1>
            <p className="text-justify">
              Szálláshelyünk a vendégeink kényelmét és kikapcsolódását szem
              előtt tartva széles körű szolgáltatásokat kínál. Legyen szó
              családi vakációról, romantikus hétvégéről vagy aktív
              kikapcsolódásról, nálunk mindenki megtalálja a számára megfelelő
              lehetőséget. Fedezze fel szobáink kényelmét, élvezze a természet
              közelségét kirándulásaink során, vagy lazítson a wellness
              részlegünkben. A kulináris élmények kedvelői sem maradnak ki,
              hiszen éttermünk magával ragadó ízekkel várja Önt. Legyen szó
              pihenésről vagy kalandról, szolgáltatásaink segítenek
              emlékezetessé tenni tartózkodását nálunk.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm py-3">
            <Card
              title={"Kajak-kenu bérlés"}
              text={
                "Szeretnénk, ha a vízen való kaland közben semmi sem állna az útjába, és ezért kajak és kenu berles szolgáltatásunk áll rendelkezésére, hogy a természet szépségeit könnyedén felfedezhesse."
              }
              image={"/images/haz1.jpeg"}
            />
          </div>
          <div className="col-sm py-3">
            <Card
              title={"Túra a hegyekben"}
              text={
                "Csatlakozzon hozzánk egy izgalmas túrára a hegyek között, ahol a lélegzetelállító kilátások és az élmények örök emlékké válnak."
              }
              image={"/images/haz2.jpeg"}
            />
          </div>
          <div className="col-sm py-3">
            <Card
              title={"Túra a hegyekben"}
              text={
                "Tapasztalja meg a csendet és a nyugalmat egy horgászat program keretében, ahol a tóparti idill és a horgászat öröme várja Önt."
              }
              image={"/images/haz3.jpeg"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
