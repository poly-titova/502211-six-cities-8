import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity, changeSort, fillingListOffers } from '../../store/action';
import SortingOptions from '../sorting-options/sorting-options';
import PlaceList from '../place-list/place-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import { Offer, Offers } from '../../types/offer';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

type MainScreenProps = {
  offers: Offers;
};

const mapStateToProps = ({ city, listOffers, sortIn }: State) => ({
  city,
  listOffers,
  sortIn,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCurrentCity(city: string) {
    dispatch(changeCity(city));
    dispatch(fillingListOffers());
  },
  onChangeSort() {
    dispatch(changeSort());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, city, listOffers, sortIn, onCurrentCity, onChangeSort } = props;
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
          <CitiesList offers={offers} activeCity={city} onCity={onCurrentCity}/>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{listOffers.length} places to stay in {city}</b>

            <SortingOptions sortIn={sortIn} onChangeSort={onChangeSort}/>

            <div className="cities__places-list places__list tabs__content">
              <PlaceList points={listOffers} onListItemHover={onListItemHover} />
            </div>
          </section>

          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={listOffers[0]} points={listOffers} selectedPoint={selectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </main >
  );
}

export { MainScreen };
export default connector(MainScreen);
