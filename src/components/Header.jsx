import logo from '../assets/galleria.svg';

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Galleria logo" />
        <h1 className="sr-only">galleria.</h1>
      </div>
      <button>start slideshow</button>
    </header>
  );
}
