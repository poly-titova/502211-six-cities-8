import { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PlacesItem from '../places-item/places-item';
import Header from '../header/header';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

type FavoritesScreenProps = {
  offers: Offers;
};

const mapStateToProps = ({ authorizationStatus, userEmail }: State) => ({
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
type ConnectedComponentProps = PropsFromRedux & FavoritesScreenProps;

function FavoritesScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, authorizationStatus, userEmail, logoutSistem } = props;
  const href = '#';
  const favorites = offers.filter((offer) => offer.isFavorite);

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  return (
    <section className="result">
      <Header authorizationStatus={authorizationStatus} userEmail={userEmail} logoutSistem={logoutSistem} />
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
    </section>
  );
}

export { FavoritesScreen };
export default connector(FavoritesScreen);
