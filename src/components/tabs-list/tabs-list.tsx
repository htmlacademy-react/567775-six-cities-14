import classNames from 'classnames';
import { TTabsList } from '../../types/tabs';
import { useAppDispatch } from '../../hooks/use-store';
import { getOffers, setCityActive } from '../../store/action';
import styled from './tabs.module.css';
import { TCityOptions } from '../../types/city';

export const TabsList: React.FC<TTabsList> = ({ list, active }) => {
  const dispatch = useAppDispatch();

  const handleClick = (id: TCityOptions) => {
    dispatch(setCityActive({ city: id }));
    dispatch(getOffers());
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {list &&
            list.map(({ title, id }) => (
              <li className="locations__item" key={id}>
                <a
                  className={classNames(
                    {
                      [styled.tabsActive]: id === active,
                    },
                    { 'tabs__item--active': id === active },
                    'locations__item-link tabs__item'
                  )}
                  onClick={() => handleClick(id)}
                  href="#"
                >
                  <span>{title}</span>
                </a>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};
