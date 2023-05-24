import PaintingPreview from '../components/PaintingPreview';
import { getAllPaintings } from '../paintings';

export default function Gallery() {
  const paintings = getAllPaintings();

  return (
    <section className="gallery">
      {paintings.map(({ name, artist, images }) => (
        <PaintingPreview
          key={name}
          name={name}
          artist={artist.name}
          imageSrc={`${images.thumbnail.slice(1)}`}
        />
      ))}
    </section>
  );
}
