import { Link } from 'react-router-dom';
import logo from '/public/assets/galleria.svg';

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Galleria logo" />
          <h1 className="sr-only">galleria.</h1>
        </Link>
      </div>
      <button>start slideshow</button>
    </header>
  );
}
