import { Offers } from '../../types/offer';
import FormComment from '../form-comment/form-comment';
import { useParams } from 'react-router-dom';

type RoomScreenProps = {
  offers: Offers;
};

function RoomScreen(props: RoomScreenProps): JSX.Element {
  const href = '#';
  const { offers } = props;
  const { id } = useParams<{id:string}>();
  const idOffer = numberFromParam(id);
  const offer = offers[idOffer];

  function numberFromParam(p:string|undefined):number {
    if(typeof p === 'undefined') {
      throw new Error('нет Offer-а в параметрах');
    }

    const result = parseInt(p, 10);
    if(Number.isFinite(result)){
      return result;
    } else {
      throw new Error('не число...');
    }
  }

  return (
    <div>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.gallery.map((item, idGallery) => {
              const keyValue = `${idGallery}`;
              return (
                <div key={keyValue} className="property__image-wrapper">
                  <img className="property__image" src={item.src} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{offer.mark}</span>
            </div>

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.name}
              </h1>

              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>

            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: '80%' }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>

            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>

              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>

              <li className="property__feature property__feature--adults">
                Max {offer.adults} adults
              </li>
            </ul>

            <div className="property__price">
              <b className="property__price-value">{offer.priceValue}</b>
              <span className="property__price-text">{offer.priceText}</span>
            </div>

            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>

              <ul className="property__inside-list">
                {offer.insideList.map((item, idList) => {
                  const keyValue = `${idList}`;
                  return (
                    <li key={keyValue} className="property__inside-item">
                      {item.item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.userAvatar} width="74" height="74" alt="Host avatar" />
                </div>

                <span className="property__user-name">
                  {offer.userName}
                </span>

                <span className="property__user-status">
                  {offer.userStatus}
                </span>
              </div>

              <div className="property__description">
                <p className="property__text">
                  {offer.text}
                </p>
              </div>
            </div>

            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ul className="reviews__list">
                {offer.review.map((item, idReview) => {
                  const keyValue = `${idReview}`;
                  return (
                    <li key={keyValue} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={item.userAvatar} width="54" height="54" alt="Reviews avatar" />
                        </div>

                        <span className="reviews__user-name">
                          {item.userName}
                        </span>
                      </div>

                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{ width: `${item.rating}` }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>

                        <p className="reviews__text">
                          {item.text}
                        </p>
                        <time className="reviews__time" dateTime={item.dateAdd}>{item.dateAdd}</time>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <FormComment />

            </section>
          </div>
        </div>
        <section className="property__map map"></section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href={href}>
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place" />
                </a>
              </div>

              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
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
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href={href}>Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href={href}>
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place" />
                </a>
              </div>

              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>

                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>

                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>

                <h2 className="place-card__name">
                  <a href={href}>Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href={href}>
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place" />
                </a>
              </div>

              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>

                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>

                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>

                <h2 className="place-card__name">
                  <a href={href}>Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RoomScreen;
