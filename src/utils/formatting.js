import { compose, inc, join, lensIndex, over, toUpper } from 'ramda';
import { currentYear } from './date';

export const joinWithNoSpace = join(``);
export const joinWithEnDash = join(`–`);

export const firstToUpper = compose(
  joinWithNoSpace,
  over(lensIndex(0), toUpper)
);

export const dateRange = startYear => {
  const endYear = currentYear();
  return endYear === startYear ? endYear : joinWithEnDash([startYear, endYear]);
};

export const pagination = ({ startIndex, endIndex, total }) =>
  `${inc(startIndex)}–${endIndex} статей из ${total}`;

export const pluralise = (name, number = 2) =>
  `${name}${number === 1 ? `` : `s`}`;

export const pluraliseWithNumber = (name, number = 2) =>
  `${number} ${pluralise(name, number)}`;

export const tagTitle = tag => `#${tag}`;

export const categoryTitle = category => `${category}`;

export const formatReadingTime = minutes => {
  let cups = Math.round(minutes / 3);
  let cakes = Math.round(minutes / 5);
  const cupsArr = `${new Array(cups || 1)
    .fill('☕️')
    .join('')} ${minutes} мин. для прочтения`;
  const cakesArr = `${new Array(cakes || 0).fill('🍰').join('')}`;
  return `${cakesArr} ${cupsArr}`;
};
