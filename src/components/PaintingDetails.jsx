import { getPainting } from '../paintings';
import { useLoaderData } from 'react-router-dom';

export function loader({ params }) {
  const painting = getPainting(params.painting);
  return { painting };
}

export default function PaintingDetails() {
  const { painting } = useLoaderData();

  return (
    <article>
      <figure>
        <img
          src={`/src/${painting.images.hero.small.slice(1)}`}
          alt={painting.name}
        />
        <figcaption>
          <h1>{painting.name}</h1>
          <h2>{painting.artist.name}</h2>
          <img src={`/src/${painting.artist.image.slice(1)}`} />
        </figcaption>
      </figure>
      <section>
        <span>{painting.year}</span>
        <p>{painting.description}</p>
      </section>
    </article>
  );
}
