import { Offers } from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offers;
};

function FavoritesScreen({ offers }: FavoritesScreenProps): JSX.Element {
  const href = '#';
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href={href}>
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((item, id) => {
                  const keyValue = `${id}`;
                  return (
                    <article className="favorites__card place-card" key={keyValue}>
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href={href}>
                          <img className="place-card__image" src={item.firstImage} width="150" height="110" alt="Place" />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{item.priceValue}</b>
                            <span className="place-card__price-text">&#47;&nbsp;{item.priceText}</span>
                          </div>
                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark" />
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{ width: '100%' }} />
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href={href}>{item.name}</a>
                        </h2>
                        <p className="place-card__type">{item.type}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
