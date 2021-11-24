import { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { fetchReviewsAction, addReviewAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';

type FormCommentProps = {
  currentOffer: number;
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  addReview(offerId: number, comment: string, rating: number) {
    dispatch(addReviewAction(offerId, comment, rating));
  },
  getReviews(id: number) {
    dispatch(fetchReviewsAction(id));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FormCommentProps;

function FormComment(props: ConnectedComponentProps): JSX.Element {
  const { currentOffer, addReview, getReviews } = props;
  const href = '#';
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const updateRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value, 10));
  };

  const updateReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addReview(currentOffer, review, rating);
    await getReviews(currentOffer);
  };

  const isSubmitButtonDisabled = !(review && rating);

  return (
    <form className="reviews__form form" action={href} method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onFocus={updateRating} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onFocus={updateRating} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onFocus={updateRating} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onFocus={updateRating} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onFocus={updateRating} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={updateReview}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

export { FormComment };
export default connector(FormComment);
