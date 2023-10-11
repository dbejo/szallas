export default function Card({
  title,
  text,
  image,
  linkText,
  link,
}: {
  title: string;
  text: string;
  image: string;
  linkText: string;
  link: string;
}) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-outline-dark">
          {linkText}
        </a>
      </div>
    </div>
  );
}
