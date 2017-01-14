import { sortByNameDesc } from './sorting';
import countriesPhoneData from '../data';

export function getAllData() {
  return countriesPhoneData.sort(sortByNameDesc);
}

function getCountryDataByAlpha2(alpha2) {
  return countriesPhoneData.find(countryData => countryData.alpha2 === alpha2);
}

export function getFullMasksByAlpha2(alpha2) {
  return getCountryDataByAlpha2(alpha2).masks;
}

/**
 * Assume all numbers have a "+" character in the beginning.
 */
function getNumberOfDigitsInPrefix(countryCode) {
  return countryCode.length - 1;
}

function removeSomeFrontDigitsFromPrefix(numberOfDigits, mask) {
  const maskChar = '#';
  let i = 0;
  let numberOfDigitsToRemoveLeft = numberOfDigits;
  while (i < mask.length && numberOfDigitsToRemoveLeft > 0) {
    if (mask[i] === maskChar) {
      numberOfDigitsToRemoveLeft -= 1;
    }
    i += 1;
  }
  while (i < mask.length && mask[i] === ' ') {
    i += 1;
  }
  return mask.substr(i, mask.length - i);
}

export function getShortMasksByAlpha2(alpha2) {
  const countryData = getCountryDataByAlpha2(alpha2);
  const numberOfDigitsInPrefix = getNumberOfDigitsInPrefix(countryData.countryCode);
  return countryData.masks.map(
    mask => removeSomeFrontDigitsFromPrefix(numberOfDigitsInPrefix, mask)
  );
}

export function getCountryCodeByAlpha2(alpha2) {
  return getCountryDataByAlpha2(alpha2).countryCode;
}
