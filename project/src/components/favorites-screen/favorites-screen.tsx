import { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PlacesItem from '../places-item/places-item';
import Header from '../header/header';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import { Offers } from '../../types/offer';

const mapStateToProps = ({ offers, authorizationStatus, userEmail }: State) => ({
  offers,
  authorizationStatus,
  userEmail,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logoutSistem() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen(props: PropsFromRedux): JSX.Element {
  const { offers, authorizationStatus, userEmail, logoutSistem } = props;
  const href = '#';
  const favorites = offers.filter((offer) => offer.isFavorite);

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  const getUniqueCityNames = (cityNames: Offers): string[] => [...new Set(favorites.map((offer) => offer.city.name))];
  const result = getUniqueCityNames(favorites);

  return (
    <section className="result">
      <Header authorizationStatus={authorizationStatus} userEmail={userEmail} logoutSistem={logoutSistem} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{favorites.length === 0 ? 'Nothing yet saved' : 'Saved listing'}</h1>
            <ul className="favorites__list">
              {result.map((city, cityId) => {
                const keyValue = `${cityId}`;
                const filtered = favorites.filter((offer) => offer.city.name === city);
                return (
                  <li key={keyValue} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href={href}>
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    {filtered.map((item, itemId) => {
                      const keyValueItem = `${itemId}`;
                      return (
                        <div key={keyValueItem} className="favorites__places">
                          <PlacesItem place={item} listItemHoverHandler={listItemHoverHandler} />
                        </div>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </section>
  );
}

export { FavoritesScreen };
export default connector(FavoritesScreen);
