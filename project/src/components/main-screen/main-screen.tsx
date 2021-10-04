import ItemPlaceList from '../item-place-list/item-place-list';
import ItemLocationList from '../item-location-list/item-location-list';
import Form from '../form/form';

type ItemPlaceListProps = {
  offersCount: number;
}

function MainScreen({ offersCount }: ItemPlaceListProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <ItemLocationList />
            <ItemLocationList />
            <ItemLocationList />
            <ItemLocationList />
            <ItemLocationList />
            <ItemLocationList />
          </ul>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            <Form />

            <div className="cities__places-list places__list tabs__content">
              <div className="cities__places-list places__list tabs__content">
                {Array(5).fill(null).slice(0, offersCount).map((_,ix) => <ItemPlaceList кеу={ix} />)}
              </div>
            </div>
          </section>

          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main >
  );
}

export default MainScreen;
