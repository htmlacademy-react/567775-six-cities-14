import { Fragment, useState } from 'react';

export const FormReview: React.FC = () => {
  const [formData, setFormData] = useState({
    rating: null,
    review: '',
  });

  const fieldChangeHandle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const listRadioButtons: number[] = [5, 4, 3, 2, 1];

  return (
    <form className="reviews__form form" action="#" method="post">
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
              onChange={fieldChangeHandle}
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
        onChange={fieldChangeHandle}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};
