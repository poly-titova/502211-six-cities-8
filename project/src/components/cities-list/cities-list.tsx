import CitiesItem from '../cities-item/cities-item';
import { Offers } from '../../types/offer';

type CitiesListProps = {
  offers: Offers;
  activeCity: string;
  onCity: (city: string) => void;
};

const getUniqueCityNames = (offers: Offers):string[] =>[...new Set(offers.map((offer)=>offer.city.name))];
function CitiesList({ offers, activeCity, onCity }: CitiesListProps): JSX.Element {
  const result = getUniqueCityNames(offers);

  return (
    <ul className="locations__list tabs__list">
      {result.map((item) => {
        const keyValue = `${item}`;
        return (
          <CitiesItem key={keyValue} city={item} activeCity={activeCity} onCity={onCity} />
        );
      })}
    </ul>
  );
}

export default CitiesList;
