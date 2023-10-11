import RoomModal from "./RoomModal";

export default function RoomCard({
  id,
  title,
  text,
  images,
  size,
  capacity,
  bed,
}: {
  id: string;
  title: string;
  text: string;
  images: string[];
  size: string;
  capacity: number;
  bed: string;
}) {
  var targetId = `#${id}`;
  return (
    <>
      <div className="card h-100">
        <img src={images[0]} className="room-card-img-top rounded" />
        <button
          className="btn btn-secondary btn-lg room-card-gallery-button"
          data-bs-toggle="modal"
          data-bs-target={targetId}
        >
          GALÉRIA
        </button>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{text}</p>
          <h2 className="card-subtitle">Jellemzők</h2>
          <p>
            Méret: {size} m<sup>2</sup>
            <br />
            Kapacitás: {capacity} fő
            <br />
            {bed}
          </p>
          <a href="/booking" className="btn btn-outline-dark w-100">
            FOGLALÁS
          </a>
        </div>
      </div>
      <RoomModal
        id={id}
        title={title}
        text={text}
        size={size}
        capacity={capacity}
        bed={bed}
        images={images}
      />
    </>
  );
}
