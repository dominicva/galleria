// import { Link } from "react-router-dom";
import PaintingPreview from '../components/PaintingPreview';
import paintings from '../data.json';

export default function Gallery() {
  return (
    <section className="gallery">
      {paintings.map(({ name, artist, images }) => (
        <PaintingPreview
          key={name}
          name={name}
          artist={artist.name}
          imageSrc={`/src${images.thumbnail.slice(1)}`}
        />
      ))}
    </section>
  );
}
