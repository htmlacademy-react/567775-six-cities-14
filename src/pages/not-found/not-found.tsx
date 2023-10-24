import { Link } from 'react-router-dom';
import { AppRouter } from '../../../consts';

export const NotFound: React.FC = () => (
  <main className="page__main">
    <div className="container">
      <h1>404</h1>
      <p>NOT FOUND</p>
      <Link to={AppRouter.Main}>
        <button className="login__submit form__submit button">To main</button>
      </Link>
    </div>
  </main>
);
