import ReviewItem from '../reviews-item/reviews-item';
import { Review } from '../../types/review';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item, idReview) => {
        const keyValue = `${idReview}`;
        return (
          <ReviewItem key={keyValue} review={item} />
        );
      })}
    </ul>
  );
}

export default ReviewsList;
