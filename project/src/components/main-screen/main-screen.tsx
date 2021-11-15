import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity, changeSort, changeSortOrder } from '../../store/action';
import SortingOptions from '../sorting-options/sorting-options';
import PlacesList from '../places-list/places-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import { Offer, Offers } from '../../types/offer';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

type MainScreenProps = {
  offers: Offers;
};

const compaires:Record<string, ((a: Offer, b:Offer) => number) | undefined> = {
  'Price: low to high': (a: Offer, b:Offer) => b.price - a.price,
  'Price: high to low': (a:Offer, b:Offer) => a.price - b.price,
  'Top rated first': (a:Offer, b:Offer) => a.rating - b.rating,
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

const mapStateToProps = ({ city, sortIn, sortOrder, offers }: State) => ({
  city,
  listOffers: makeSort(offers, sortOrder, city),
  sortIn,
  sortOrder,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCurrentCity(city: string) {
    dispatch(changeCity(city));
  },
  onChangeSort() {
    dispatch(changeSort());
  },
  onChangeListSort(sortOrder: string) {
    dispatch(changeSortOrder(sortOrder));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, city, listOffers, sortIn, sortOrder, onCurrentCity, onChangeSort, onChangeListSort } = props;
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  const cityFirst = listOffers[0];

  return (
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
  );
}

export { MainScreen };
export default connector(MainScreen);
