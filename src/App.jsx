import Header from './components/Header';
import PaintingPreview from './components/PaintingPreview';
import paintings from './data.json';

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
