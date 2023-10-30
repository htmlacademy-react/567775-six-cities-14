export const ratingPercentage = (
  value: number,
  percentageOfNumber: number = 5
) => Math.floor((100 / percentageOfNumber) * value);
