import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormComment from '../form-comment/form-comment';
import ReviewsList from '../reviews-list/reviews-list';
import NearPlacesList from '../near-places-list/near-places-list';
import Map from '../map/map';
import { Offer, Offers } from '../../types/offer';

type RoomScreenProps = {
  offers: Offers;
};

function RoomScreen(props: RoomScreenProps): JSX.Element {
  const { offers } = props;
  const { id } = useParams<{ id: string }>();
  const idOffer = numberFromParam(id);
  const offer = offers[idOffer];

  function numberFromParam(p: string | undefined): number {
    if (typeof p === 'undefined') {
      throw new Error('нет Offer-а в параметрах');
    }

    const result = parseInt(p, 10);
    if (Number.isFinite(result)) {
      return result;
    } else {
      throw new Error('не число...');
    }
  }

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((item) => item.name === listItemName);
    setSelectedPoint(currentPoint);
  };

  const nearPlaces = [...offers.slice(0, idOffer), ...offers.slice(idOffer + 1)];

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
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.review.length}</span></h2>
              <ReviewsList reviews={offer.review} />
              <FormComment />

            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={nearPlaces[0]} points={nearPlaces} selectedPoint={selectedPoint} />
        </section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <NearPlacesList points={nearPlaces} onListItemHover={onListItemHover} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default RoomScreen;
