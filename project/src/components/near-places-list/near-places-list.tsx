import { MouseEvent } from 'react';
import NearPlacesItem from '../near-places-item/near-places-item';
import { Offers } from '../../types/offer';

type NearPlacesListProps = {
  points: Offers;
  onListItemHover: (listItemName: string) => void;
};

function NearPlacesList(props: NearPlacesListProps): JSX.Element {
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
          <NearPlacesItem key={keyValue} place={point} listItemHoverHandler={listItemHoverHandler} />
        );
      })}
    </div>
  );
}

export default NearPlacesList;
