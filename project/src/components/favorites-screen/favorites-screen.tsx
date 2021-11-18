import { MouseEvent } from 'react';
import { Offers } from '../../types/offer';
import PlacesItem from '../places-item/places-item';

type FavoritesScreenProps = {
  offers: Offers;
};

function FavoritesScreen({ offers }: FavoritesScreenProps): JSX.Element {
  const href = '#';
  const favorites = offers.filter((offer) => offer.isFavorite);

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favorites.map((item, id) => {
              const keyValue = `${id}`;
              return (
                <li key={keyValue} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href={href}>
                        <span>{item.city.name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <PlacesItem place={item} listItemHoverHandler={listItemHoverHandler} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
