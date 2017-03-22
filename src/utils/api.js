import COUNTRY_DATA from '../data';
import { sortByNameDesc } from './sorting';
import getE123Masks from '../utils/e-123-masks';
import MASK_CHAR from '../constants/mask-char';

export function getAllData() {
  return COUNTRY_DATA.sort(sortByNameDesc);
}

function getCountryDataByAlpha2(alpha2) {
  return COUNTRY_DATA.find(countryData => countryData.alpha2 === alpha2);
}

export function getFullMasksByAlpha2(alpha2) {
  const countryData = getCountryDataByAlpha2(alpha2);
  return countryData.masks || getE123Masks(countryData.countryCode);
}

/**
 * Assume all numbers have a "+" character in the beginning.
 */
function getNumberOfDigitsInPrefix(countryCode) {
  return countryCode.length - 1;
}

function removeSomeFrontDigitsFromPrefix(numberOfDigits, mask) {
  let i = 0;
  let numberOfDigitsToRemoveLeft = numberOfDigits;
  while (i < mask.length && numberOfDigitsToRemoveLeft > 0) {
    if (mask[i] === MASK_CHAR) {
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
  const countryMasks = countryData.masks || getE123Masks(countryData.countryCode);
  return countryMasks.map(
    mask => removeSomeFrontDigitsFromPrefix(numberOfDigitsInPrefix, mask),
  );
}

export function getCountryCodeByAlpha2(alpha2) {
  return getCountryDataByAlpha2(alpha2).countryCode;
}
