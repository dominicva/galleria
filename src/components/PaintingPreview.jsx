import { Link } from 'react-router-dom';

export default function PaintingPreview({ name, artist, imageSrc }) {
  return (
    <Link to={`gallery/${name}`}>
      <figure>
        <img src={imageSrc} alt={name} />
        <figcaption>
          <h2>{name}</h2>
          <h3 className="subhead-2">{artist}</h3>
        </figcaption>
      </figure>
    </Link>
  );
}
