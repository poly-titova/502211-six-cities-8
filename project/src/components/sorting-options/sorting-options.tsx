import { MouseEvent } from 'react';

type SortingOptionsProps = {
  sortIn: boolean,
  sortOrder: string,
  onChangeSort: () => void,
  onChangeListSort: (sortOrder: string) => void,
};

function SortingOptions(props: SortingOptionsProps): JSX.Element {
  const { sortIn, sortOrder, onChangeSort, onChangeListSort } = props;
  const href = '#';

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onChangeListSort(event.currentTarget.innerText);
  };

  return (
    <form className="places__sorting" action={href} method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex={0} onClick={onChangeSort}>
        { sortOrder }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <ul className={`places__options places__options--custom ${sortIn ? 'places__options--opened' : ''}`}>
        <li className="places__option" tabIndex={0} onClick={listItemHoverHandler}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={listItemHoverHandler}>Price: low to high</li>
        <li className="places__option" tabIndex={0} onClick={listItemHoverHandler}>Price: high to low</li>
        <li className="places__option" tabIndex={0} onClick={listItemHoverHandler}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortingOptions;
