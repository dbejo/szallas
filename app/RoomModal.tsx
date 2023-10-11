export default function RoomModal({
  id,
  title,
  text,
  size,
  capacity,
  bed,
  images,
}: {
  id: string;
  title: string;
  text: string;
  size: string;
  capacity: number;
  bed: string;
  images: string[];
}) {
  const imageNodes = [];
  const imageButtonNodes = [];
  const carouselId = id + "Carousel";
  const targetId = `#${carouselId}`;
  for (let i = 0; i < images.length; i++) {
    imageNodes.push(
      <div
        className={
          i == 0
            ? "carousel-item active carousel-item-room"
            : "carousel-item carousel-item-room"
        }
      >
        <img src={images[i]} className="d-block w-100" />
      </div>
    );
    imageButtonNodes.push(
      <button
        type="button"
        data-bs-target={targetId}
        data-bs-slide-to={i}
        className="active"
        aria-current={i == 0 ? "true" : "false"}
        aria-label={"Slide " + i}
      ></button>
    );
  }
  return (
    <div className="modal fade" id={id}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Képek</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-8">
                <div
                  id={carouselId}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">{imageButtonNodes}</div>
                  <div className="carousel-inner">{imageNodes}</div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={targetId}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={targetId}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                <h4>{title}</h4>
                <p>{text}</p>
                <h4>Jellemzők</h4>
                <p>
                  Méret: {size} m<sup>2</sup>
                  <br />
                  Kapacitás: {capacity} fő
                  <br />
                  {bed}
                </p>
                <a href="/booking" className="btn btn-outline-dark">
                  FOGLALÁS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
