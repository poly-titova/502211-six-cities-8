function ItemLocationList(): JSX.Element {
  const href = '#';
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href={href}>
        <span>Paris</span>
      </a>
    </li>
  );
}

export default ItemLocationList;
