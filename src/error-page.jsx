import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Back to gallery</Link>
    </div>
  );
}
