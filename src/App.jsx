import Header from './components/Header';
import starryNightSmall from './assets/starry-night/hero-small.jpg';

function App() {
  return (
    <>
      <Header />
      <section className="gallery">
        <figure>
          <img src={starryNightSmall} alt="Starry Night" />
          <figcaption>
            <h2>Starry Night</h2>
            <h3 className="subhead-2">Vincent Van Gogh</h3>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default App;
