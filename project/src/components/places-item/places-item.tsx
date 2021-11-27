import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { AppRoute } from '../../const';
import { addFavoriteAction, fetchOfferAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { Offer } from '../../types/offer';

type PlacesItemProps = {
  place: Offer;
  listItemHoverHandler: (event: MouseEvent<HTMLLIElement>) => void;
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  addFavorite(offerId: number, place: Offer) {
    dispatch(addFavoriteAction(offerId, place));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PlacesItemProps;

function PlacesItem(props: ConnectedComponentProps): JSX.Element {
  const { place, listItemHoverHandler, addFavorite } = props;
  const href = '#';

  const onSubmit = async () => {
    place.isFavorite = !place.isFavorite;

    await addFavorite(place.id, place);
    await fetchOfferAction();
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={listItemHoverHandler} title={place.title}>
      {place.isPremium === false ? null :
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className={`place-card__bookmark-button ${place.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" title={`${place.id}`} onClick={onSubmit}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 - 100 / Math.round(place.rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${place.id}`}>{place.title}</Link>
        </h2>

        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export { PlacesItem };
export default connector(PlacesItem);
