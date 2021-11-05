import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity } from '../../store/action';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import { Offer, Offers } from '../../types/offer';
import { State } from '../../types/state';
import { Actions } from '../../types/action';

type MainScreenProps = {
  offers: Offers;
};

const mapStateToProps = ({ city }: State) => ({
  city,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCurrentCity() {
    dispatch(changeCity());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, city, onCurrentCity } = props;
  const href = '#';
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.name === listItemName);
    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href={href} onClick={() => { onCurrentCity(); }}>
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href={href} onClick={() => { onCurrentCity(); }}>
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href={href} onClick={() => { onCurrentCity(); }}>
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href={href} onClick={() => { onCurrentCity(); }}>
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href={href} onClick={() => { onCurrentCity(); }}>
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href={href} onClick={() => { onCurrentCity(); }}>
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>

              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>

              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>

            <div className="cities__places-list places__list tabs__content">
              <PlaceList points={offers} onListItemHover={onListItemHover} />
            </div>
          </section>

          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={offers[0]} points={offers} selectedPoint={selectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </main >
  );
}

export { MainScreen };
export default connector(MainScreen);
