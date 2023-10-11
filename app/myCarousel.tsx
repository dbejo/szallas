export default function MyCarousel() {
    return(
        <div id="carouselTop" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselTop"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTop"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTop"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/haz1.jpeg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./images/haz2.jpeg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./images/haz3.jpeg" className="d-block w-100" />
          </div>
        </div>
        <div className="carousel-caption d-block">
          <h1>Az én kis szállásom</h1>
          <p>
            Ismerje meg bájos kis szállásunk a Börzsöny szívében, egy lépésre
            a természettől.
          </p>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTop"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselTop"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}