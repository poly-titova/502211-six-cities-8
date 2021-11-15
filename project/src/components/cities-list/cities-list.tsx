import CitiesItem from '../cities-item/cities-item';
import { Offers } from '../../types/offer';

type CitiesListProps = {
  offers: Offers;
  activeCity: string;
  onCity: (city: string) => void;
};

function CitiesList({ offers, activeCity, onCity }: CitiesListProps): JSX.Element {
  const cities:string[] = [];
  const result:Array<string> = [];

  offers.map((item) => {
    const cityName = item.city.name;
    cities.push(cityName);
    for (const city of cities) {
      if (!result.includes(city)) {
        result.push(city);
      }
    }
  });

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
