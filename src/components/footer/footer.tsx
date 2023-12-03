import { Link } from 'react-router-dom';
import { AppRouter } from '../../../consts';

export const Footer: React.FC = () => (
  <footer className="footer container">
    <Link to={AppRouter.Main} className="footer__logo-link">
      <img
        className="footer__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={64}
        height={33}
      />
    </Link>
  </footer>
);
