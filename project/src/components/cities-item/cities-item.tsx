type CitiesItemProps = {
  city: string;
};

function CitiesItem({ city }: CitiesItemProps): JSX.Element {
  const href = '#';
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href={href}>
        <span>{ city }</span>
      </a>
    </li>
  );
}

export default CitiesItem;
