import ReviewItem from '../reviews-item/reviews-item';
import { Reviews } from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews;
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item, idReview) => {
        const keyValue = `${idReview}`;
        return (
          <ReviewItem key={keyValue} keyValue={keyValue} review={item} />
        );
      })}
    </ul>
  );
}

export default ReviewsList;
