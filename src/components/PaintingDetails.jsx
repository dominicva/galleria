import { getPainting } from '../paintings';
import { useLoaderData } from 'react-router-dom';
// import paintings from '../data.json';

export function loader({ params }) {
  const painting = getPainting(params.painting);
  // console.log(painting);
  return { painting };
}

export default function PaintingDetails() {
  const { painting } = useLoaderData();
  console.log(painting);
  return (
    <div>
      <h1>{painting.name}</h1>
    </div>
  );
}
