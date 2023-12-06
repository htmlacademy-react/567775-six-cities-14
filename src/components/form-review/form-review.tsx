import { FormEvent, Fragment, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { submitCommentAction } from '../../store/api-actions';
import { FormReviewsProps } from '../../types/reviews';
import { getOfferCommentSubmitIsPending } from '../../store/offer-comments-process/selectors';
import { Spinner } from '../spinner';
import classNames from 'classnames';
import styled from './form-review.module.css';

export const FormReview: React.FC<FormReviewsProps> = ({
  idOffer,
}: FormReviewsProps) => {
  const dispatch = useAppDispatch();
  const isOfferCommentSubmitIsPending = useAppSelector(
    getOfferCommentSubmitIsPending
  );

  const [formData, setFormData] = useState({
    rating: null,
    review: '',
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(formData.review.length < 50 || formData.rating === null);
  }, [formData.rating, formData.review]);

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const listRadioButtons: number[] = [5, 4, 3, 2, 1];

  const resetForm = () => {
    setFormData({
      rating: null,
      review: '',
    });

    setDisabled(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (idOffer && !disabled) {
      dispatch(
        submitCommentAction({
          id: idOffer,
          comment: formData.review,
          rating: Number(formData.rating),
        })
      );

      resetForm();
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {listRadioButtons.map((radioValue) => (
          <Fragment key={radioValue}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={radioValue}
              id={`${radioValue}-stars`}
              type="radio"
              checked={String(radioValue) === String(formData.rating)}
              onChange={handleFieldChange}
              disabled={isOfferCommentSubmitIsPending}
            />
            <label
              htmlFor={`${radioValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
        maxLength={300}
        disabled={isOfferCommentSubmitIsPending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          style={{ position: 'relative' }}
          type="submit"
          disabled={disabled || isOfferCommentSubmitIsPending}
        >
          <span
            className={classNames({
              [styled.isOpacity]: isOfferCommentSubmitIsPending,
            })}
          >
            Submit
          </span>
          {isOfferCommentSubmitIsPending && <Spinner />}
        </button>
      </div>
    </form>
  );
};
