import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks/use-store';
import { loginAction } from '../../store/api-actions';
import { locations } from '../main/helper';
import { setCityActive } from '../../store/offers-process/offers-process';
import { CityOptionsType } from '../../types/city';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from '../../../consts';

export const Login: React.FC = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  const randomCityLink =
    locations.list[Math.floor(Math.random() * locations.list.length)];

  const handleNavigateToCityLink = (id: CityOptionsType) => {
    if (id) {
      dispatch(setCityActive({ city: id }));
      navigate(AppRouter.Main);
    }
  };

  return (
    <>
      <Helmet>
        <title>login</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a
                className="locations__item-link"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigateToCityLink(randomCityLink.id);
                }}
              >
                <span>{randomCityLink.title}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
