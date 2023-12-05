import classNames from 'classnames';
import { SortingListType, SortingOffersType } from '../../types/sorting';
import { useState, useEffect } from 'react';
import { getTextById } from './helper';
import styled from './sorting-select.module.css';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useAppDispatch } from '../../hooks/use-store';
import { setOffers, setSorting } from '../../store/offers-process/offers-process';

export const SortingSelect: React.FC<SortingListType> = ({
  list,
}: SortingListType) => {
  const [sortBy, setSortBy] = useState<SortingOffersType>('popular');
  const [textActive, setTextActive] = useState<string>();
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useAppDispatch();

  const ref = useOutsideClick(() => {
    setOpenMenu(false);
  });

  useEffect(() => {
    setTextActive(getTextById(sortBy, list));
  }, [sortBy]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleChangeValue = (id: SortingOffersType) => {
    setSortBy(id);
    setTextActive(getTextById(sortBy, list));
    setOpenMenu(false);

    dispatch(setSorting({ sorting: id }));
    dispatch(setOffers());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className={classNames(
          {
            [styled.menuOpened]: openMenu,
          },
          'places__sorting-type'
        )}
        tabIndex={0}
        onClick={handleOpenMenu}
      >
        {textActive}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {openMenu && (
        <div ref={ref}>
          <ul className="places__options places__options--custom places__options--opened">
            {list &&
              list.map(({ title, id }) => (
                <li
                  className={classNames(
                    { 'places__option--active': id === sortBy },
                    'places__option'
                  )}
                  tabIndex={0}
                  key={id}
                  onClick={() => handleChangeValue(id)}
                >
                  {title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </form>
  );
};
