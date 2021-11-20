import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity, changeSort, changeSortOrder } from '../../store/action';
import SortingOptions from '../sorting-options/sorting-options';
import PlacesList from '../places-list/places-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer, Offers } from '../../types/offer';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../store/api-actions';
import { State } from '../../types/state';

type MainScreenProps = {
  offers: Offers;
};

const hrefNull = '#';

const compaires: Record<string, ((a: Offer, b: Offer) => number) | undefined> = {
  'Price: low to high': (a: Offer, b: Offer) => b.price - a.price,
  'Price: high to low': (a: Offer, b: Offer) => a.price - b.price,
  'Top rated first': (a: Offer, b: Offer) => a.rating - b.rating,
};

const makeSort = (offers: Offers, sortOrder: string, city: string) => {
  const filtred = offers.filter((offer) => offer.city.name === city);
  const compaire = compaires[sortOrder];
  if (typeof compaire === 'undefined' || sortOrder === 'Popular') {
    return filtred;
  }
  const sorted = [...filtred].sort(compaire);
  return sorted;
};

const mapStateToProps = ({ city, sortIn, sortOrder, offers, authorizationStatus, userEmail }: State) => ({
  city,
  listOffers: makeSort(offers, sortOrder, city),
  sortIn,
  sortOrder,
  authorizationStatus,
  userEmail,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onCurrentCity(city: string) {
    dispatch(changeCity(city));
  },
  onChangeSort() {
    dispatch(changeSort());
  },
  onChangeListSort(sortOrder: string) {
    dispatch(changeSortOrder(sortOrder));
  },
  logoutSistem() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, city, listOffers, sortIn, sortOrder, authorizationStatus, userEmail, onCurrentCity, onChangeSort, onChangeListSort, logoutSistem } = props;
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  const cityFirst = listOffers[0];

  return (
    <section className="result">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href={hrefNull}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={hrefNull}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userEmail}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <Link
                      className="header__nav-link"
                      onClick={(evt) => {
                        evt.preventDefault();

                        logoutSistem();
                      }}
                      to={`${AppRoute.Root}`}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                    :
                    <Link
                      className="header__nav-link"
                      to={`${AppRoute.Login}`}
                    >
                      <span className="header__signin">Sign in</span>
                    </Link>}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList offers={offers} activeCity={city} onCity={onCurrentCity} />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{listOffers.length} places to stay in {city}</b>

              <SortingOptions sortIn={sortIn} sortOrder={sortOrder} onChangeSort={onChangeSort} onChangeListSort={onChangeListSort} />

              <div className="cities__places-list places__list tabs__content">
                <PlacesList places={listOffers} onListItemHover={onListItemHover} />
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityFirst} points={listOffers} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main >
    </section>
  );
}

export { MainScreen };
export default connector(MainScreen);
