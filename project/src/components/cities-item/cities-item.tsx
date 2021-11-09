import { MouseEvent } from 'react';

type CitiesItemProps = {
  city: string;
  activeCity: string;
  onCity: (city: string) => void;
};

function CitiesItem(props : CitiesItemProps): JSX.Element {
  const href = '#';
  const { city, activeCity, onCity } = props;

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onCity(event.currentTarget.innerText);
  };

  return (
    <li className="locations__item" onClick={listItemHoverHandler}>
      <a className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} href={href}>
        <span>{ city }</span>
      </a>
    </li>
  );
}

export default CitiesItem;
