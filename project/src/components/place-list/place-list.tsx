import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offers } from '../../types/offer';

type PlaceListProps = {
  points: Offers;
  onListItemHover: (listItemName: string) => void;
};

function PlaceList(props: PlaceListProps): JSX.Element {
  const href = '#';
  const { points, onListItemHover } = props;

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {points.map((point, index) => {
        const keyValue = `${index}`;
        return (
          <article className="cities__place-card place-card" key={keyValue} onMouseEnter={listItemHoverHandler}>
            <div className="place-card__mark">
              <span>{point.mark}</span>
            </div>

            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href={href}>
                <img className="place-card__image" src={point.firstImage} width="260" height="200" alt="Place" />
              </a>
            </div>

            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{point.priceValue}</b>
                  <span className="place-card__price-text">&#47;&nbsp;{point.priceText}</span>
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
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>

              <h2 className="place-card__name">
                <Link to={`${AppRoute.Room}/${point.id}`}>{point.name}</Link>
              </h2>

              <p className="place-card__type">{point.type}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default PlaceList;
