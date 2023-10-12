import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import MyCarousel from "./myCarousel";
import Card from "./card";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MyCarousel />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm py-3">
            <img src="/images/haz1.jpeg" className="w-100 rounded"></img>
          </div>
          <div className="col-sm py-3">
            <h1>Kis szállás</h1>
            <p className="text-justify">
              Üdvözöljük az új kalandban! Üljön vissza, lazítson, és engedje,
              hogy elkalauzoljuk Önt a legemlékezetesebb élmények felé. Válassza
              vidéki szálláshelyünket, ahol a természet szépsége és a kényelmes
              kikapcsolódás találkozik. Az itt töltött idő nemcsak egy egyszerű
              szállásélmény, hanem egy olyan utazásé, ami örök emlékeket hoz.
            </p>
            <p className="text-justify">
              Fedezze fel szálláshelyünk széles választékát, hogy megtalálja a
              legmegfelelőbb szobát az Ön igényeinek. Kényelmes szállásaink
              egyaránt kínálnak romantikus menedéket pároknak, családi
              kikapcsolódást vagy luxus lakosztályokat a kényeztetésre
              vágyóknak. Ízléses berendezés és figyelmesség jellemzi minden
              szobánkat.
            </p>
            <p className="text-justify">
              Legyen részese a vidéki idillnek és a varázslatos környezetnek,
              amely inspirál és feltölt. Tekintse meg részletes ajánlatainkat,
              és lépjen be az utazásba a vidéki pihenés világába velünk!
            </p>
            <a href="/booking" className="btn btn-dark btn-lg my-2">
              LEFOGLALOM
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm py-3">
            <h1>Kutyabarát szálláshely</h1>
            <p className="text-justify">
              Itt mindenki négy lábon járó barátja szívesen látott vendég.
              Hiszünk abban, hogy a családi kutyatagok részei egy pihentető
              vakációnak, és ezért kínálunk kényelmes és barátságos környezetet,
              ahol az egész család örömmel pihenhet.
            </p>
            <p className="text-justify">
              Szobáink kifejezetten kutyabarátok számára tervezettek, hogy Ön és
              kedvence is otthon érezhesse magát. Mindegyik szobában található
              kényelmes alvóhely és olyan helyek, ahol a kutyák játszhatnak.
              Emellett közvetlenül a szálláshely környékén is lehetősége van
              kutyasétáltatásra és kikapcsolódásra a természetben.
            </p>
            <p className="text-justify">
              Mindenképpen vigye magával hűséges társát, és élvezze a közös
              kikapcsolódást, mely során semmi sem hiányozhat a kényelemről és a
              kutyák öröméről. Böngéssze szolgáltatásainkat és szobáinkat, és
              várjuk Önt és kedvencét kutyabarát szálláshelyünkön!
            </p>
          </div>
          <div className="col-sm py-3">
            <img src="/images/kutya.jpeg" className="w-100 rounded"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-sm py-3 d-flex align-items-stretch">
            <Card
              title={"Környék"}
              text={
                "Ismerd meg a, ahol lenyűgöző táj, történelem és természeti csodák várnak rád!"
              }
              image={"/images/dunakanyar.jpeg"}
              linkText="FEDEZZ FEL"
              link="https://nagyborzsony.hu/turizmus/"
            />
          </div>
          <div className="col-sm py-3 d-flex align-items-stretch">
            <Card
              title={"Programok"}
              text={
                "Fedezzed fel izgalmasprogramjainkat, melyek kalandra és felfedezésre hívnak!"
              }
              image={"/images/kajak.jpeg"}
              linkText="ÉRDEKEL"
              link="https://turizmus.com/cimke/B%C3%B6rzs%C3%B6ny"
            />
          </div>
          <div className="col-sm py-3 d-flex align-items-stretch">
            <Card
              title={"Különlegességek"}
              text={
                "Ismerd meg a Börzsöny különlegességeit, melyek garantáltan feledhetetlen élményekkel ajándékoznak meg!"
              }
              image={"/images/tura.jpeg"}
              linkText="MEGNÉZEM"
              link="https://csodahelyek.hu/2021/01/10/borzsony-latnivalok/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
