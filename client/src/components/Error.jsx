import { useRouteError } from 'react-router-dom';




export default function Error() {
  const error = useRouteError();
  console.error(error);
  console.error(error.message);
  return (
    <div id="error-page"className='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <br />
        <i>{error.error.message || error.error.message}</i>
      </p>
    </div>
  );
}

