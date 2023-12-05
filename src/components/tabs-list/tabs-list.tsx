import classNames from 'classnames';
import { TabsListType } from '../../types/tabs';
import { useAppDispatch } from '../../hooks/use-store';
import styled from './tabs.module.css';
import { CityOptionsType } from '../../types/city';
import { setCityActive, setOffers } from '../../store/offers-process/offers-process';

export const TabsList: React.FC<TabsListType> = ({ list, active }: TabsListType) => {
  const dispatch = useAppDispatch();

  const handleClick = (id: CityOptionsType) => {
    dispatch(setCityActive({ city: id }));
    dispatch(setOffers());
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
