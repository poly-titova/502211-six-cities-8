type SortingOptionsProps = {
  sortIn: boolean,
  onChangeSort: () => void,
};

function SortingOptions(props: SortingOptionsProps): JSX.Element {
  const { sortIn, onChangeSort } = props;
  const href = '#';
  return (
    <form className="places__sorting" action={href} method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex={0} onClick={onChangeSort}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <ul className={`places__options places__options--custom ${sortIn ? 'places__options--opened' : ''}`}>
        <li className="places__option" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortingOptions;
