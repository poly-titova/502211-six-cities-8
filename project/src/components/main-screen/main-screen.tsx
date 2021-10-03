import ItemListScreen from '../item-list-screen/item-list-screen';
import FormScreen from '../form-screen/form-screen';

type ItemListScreenProps = {
  offersCount: number;
}

function MainScreen({offersCount}: ItemListScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>

            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>

            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>

            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>

            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>

            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
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

            <FormScreen />

            <div className="cities__places-list places__list tabs__content">
              <ItemListScreen />
              <ItemListScreen />
              <ItemListScreen />
              <ItemListScreen />
              <ItemListScreen />
            </div>
          </section>

          <div className="cities__right-section">
            <section className="cities__map map"/>
          </div>
        </div>
      </div>
    </main >
  );
}

export default MainScreen;
