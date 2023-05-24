import { getPainting } from '../paintings';
import { useLoaderData } from 'react-router-dom';

export function loader({ params }) {
  const painting = getPainting(params.painting);
  return { painting };
}

export default function PaintingDetails() {
  const { painting } = useLoaderData();

  return (
    <article className="painting-details">
      <figure>
        <img
          src={`${painting.images.hero.small.slice(1)}`}
          alt={painting.name}
        />
        <figcaption>
          <hgroup>
            <h2>{painting.name}</h2>
            <h3 className="subhead-1">{painting.artist.name}</h3>
          </hgroup>
          <section className="painting-description">
            <img src={`${painting.artist.image.slice(1)}`} />
            <span className="display-text">{painting.year}</span>
            <p>{painting.description}</p>
          </section>
        </figcaption>
      </figure>
    </article>
  );
}
