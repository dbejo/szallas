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
  linkText?: string;
  link?: string;
}) {
  let button;
  if (link && linkText) {
    button = (
      <a href={link} className="btn btn-outline-dark">
        {linkText}
      </a>
    );
  }
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
        {button}
      </div>
    </div>
  );
}
