import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FormComment from '../form-comment/form-comment';
import ReviewsList from '../reviews-list/reviews-list';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import { AuthorizationStatus } from '../../const';
import { logoutAction, fetchReviewsAction, addFavoriteAction, fetchOfferAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { Offer, Offers } from '../../types/offer';
import { State } from '../../types/state';

type RoomScreenProps = {
  offers: Offers;
};

const mapStateToProps = ({ authorizationStatus, userEmail, reviews }: State) => ({
  authorizationStatus,
  userEmail,
  reviews,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logoutSistem() {
    dispatch(logoutAction());
  },
  getReviews(id: number) {
    dispatch(fetchReviewsAction(id));
  },
  addFavorite(offerId: number, place: Offer) {
    dispatch(addFavoriteAction(offerId, place));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & RoomScreenProps;

function RoomScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, authorizationStatus, userEmail, reviews, logoutSistem, getReviews, addFavorite } = props;
  const { id } = useParams<{ id: string }>();
  const idOffer = numberFromParam(id);
  const offer = offers[idOffer];

  function numberFromParam(p: string | undefined): number {
    if (typeof p === 'undefined') {
      throw new Error('нет Offer-а в параметрах');
    }

    const result = parseInt(p, 10);
    return result;
  }

  if (typeof idOffer !== 'number' || offer === undefined || idOffer > offers.length) {
    return (
      <NotFoundScreen />
    );
  }

  if (offer) {
    getReviews(idOffer);
  }

  const sorted = [...offers].sort((a: Offer, b: Offer) => b.location.latitude - a.location.latitude);
  const nearPlaces = [sorted[idOffer - 1], sorted[idOffer + 1], sorted[idOffer + 2]];
  const nearPlacesWithCurrentOffer = [sorted[idOffer - 1], sorted[idOffer], sorted[idOffer + 1], sorted[idOffer + 2]];

  const onSubmit = async () => {
    offer.isFavorite = !offer.isFavorite;

    await addFavorite(offer.id, offer);
    await fetchOfferAction();
  };

  return (
    <section className="result">
      <Header authorizationStatus={authorizationStatus} userEmail={userEmail} logoutSistem={logoutSistem} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, idImage) => {
                const keyValue = `${idImage}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Place" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium === false ? null :
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>

                <button className={`property__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={onSubmit}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${100 - 100 / Math.round(offer.rating)}%` }} />
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
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">{offer.price}</b>
                <span className="property__price-text">night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>

                <ul className="property__inside-list">
                  {offer.goods.map((good, idGood) => {
                    const keyValue = `${idGood}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        {good}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>

                  <span className="property__user-name">
                    {offer.host.name}
                  </span>

                  {offer.host.isPro ?
                    <span className="property__user-status">
                      Pro
                    </span> : null}
                </div>

                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews === undefined ? '0' : reviews.length}</span></h2>
                {reviews !== undefined ? <ReviewsList reviews={reviews} /> : null}
                {authorizationStatus === AuthorizationStatus.Auth ? <FormComment currentOffer={idOffer}/> : null}
              </section>
            </div>
          </div>
          <section className="map">
            <Map city={offer} points={nearPlacesWithCurrentOffer} selectedPoint={offer} />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlacesList places={nearPlaces} onListItemHover={() => 0} />
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export { RoomScreen };
export default connector(RoomScreen);
