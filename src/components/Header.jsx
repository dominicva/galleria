import logo from '../assets/galleria.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Galleria logo" />
      <button>start slideshow</button>
    </header>
  );
}
