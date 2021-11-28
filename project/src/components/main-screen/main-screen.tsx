import { connect, ConnectedProps } from 'react-redux';
import { changeCity, changeSort, changeSortOrder } from '../../store/action';
import Header from '../header/header';
import SortingOptions from '../sorting-options/sorting-options';
import PlacesList from '../places-list/places-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import { useSelectedPoint } from '../../hooks/useSelectedPoint';
import { Offer, Offers } from '../../types/offer';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../store/api-actions';
import { State } from '../../types/state';

type MainScreenProps = {
  offers: Offers;
};

const compaires: Record<string, ((a: Offer, b: Offer) => number) | undefined> = {
  'Price: low to high': (a: Offer, b: Offer) => a.price - b.price,
  'Price: high to low': (a: Offer, b: Offer) => b.price - a.price,
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
  const [selectedPoint, onListItemHover] = useSelectedPoint(offers);
  const cityFirst = listOffers[0];

  return (
    <section className="result">
      <Header authorizationStatus={authorizationStatus} userEmail={userEmail} logoutSistem={logoutSistem} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList offers={offers} activeCity={city} onCity={onCurrentCity} />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container" style={{ height: '70vh' }}>
            <section className="cities__places places">
              <h2 className="visually-hidden">{listOffers.length === 0 ? 'No places to stay available' : 'Places'}</h2>
              <b className="places__found">{listOffers.length === 0 ? 0 : listOffers.length} places to stay in {city}</b>

              <SortingOptions sortIn={sortIn} sortOrder={sortOrder} onChangeSort={onChangeSort} onChangeListSort={onChangeListSort} />

              <div className="cities__places-list places__list tabs__content">
                <PlacesList places={listOffers.length === 0 ? [] : listOffers} onListItemHover={onListItemHover} />
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map" style={{ height: '500px' }}>
                <Map city={cityFirst} points={listOffers.length === 0 ? [] : listOffers} selectedPoint={selectedPoint} />
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
