import { MouseEvent } from 'react';
import { Offers } from '../../types/offer';
import PlacesItem from '../places-item/places-item';

type PlacesListProps = {
  places: Offers;
  onListItemHover: (listItemName: string) => void;
};

function PlacesList(props: PlacesListProps): JSX.Element {
  const { places, onListItemHover } = props;

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place, index) => {
        const keyValue = `${index}`;
        return (
          <PlacesItem key={keyValue} place={place} listItemHoverHandler={listItemHoverHandler}/>
        );
      })}
    </div>
  );
}

export default PlacesList;
