import Header from './components/Header';
import starryNightThumbnail from './assets/starry-night/thumbnail.jpg';
import PaintingPreview from './components/PaintingPreview';

function App() {
  return (
    <>
      <Header />
      <section className="gallery">
        <PaintingPreview
          title="Starry Night"
          artist="Vincent Van Gogh"
          imageSrc={starryNightThumbnail}
        />
      </section>
    </>
  );
}

export default App;
