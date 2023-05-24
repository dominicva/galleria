import { Outlet } from 'react-router-dom';
import logo from '../assets/galleria.svg';

export default function Root() {
  return (
    <>
      <header>
        <img src={logo} alt="Galleria logo" />
        <button>start slideshow</button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
