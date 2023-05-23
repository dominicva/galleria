export default function PaintingPreview({ title, artist, imageSrc }) {
  return (
    <figure>
      <img src={imageSrc} alt={title} />
      <figcaption>
        <h2>{title}</h2>
        <h3 className="subhead-2">{artist}</h3>
      </figcaption>
    </figure>
  );
}
