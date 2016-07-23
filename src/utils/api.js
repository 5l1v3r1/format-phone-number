import { countriesPhoneData } from './country-phone-data';
import { sortByName } from './sorting';

export function getAllPhoneData() {
  return countriesPhoneData.sort(sortByName);
}

function getCountryDataByCode(countryCode) {
  return countriesPhoneData.find(countryData => countryData.country === countryCode);
}

export function getFullMaskByCountryCode(countryCode) {
  return getCountryDataByCode(countryCode).intlNumberMask;
}

// TODO: make sure it is correct
function getNumberOfDigitsInPrefix(intlNumberPrefix) {
  return intlNumberPrefix.length - 1;
}

function removeSomeFrontDigitsFromPrefix(numberOfDigits, intlNumberMask) {
  const maskChar = '#';
  let i = 0;
  let numberOfDigitsToRemoveLeft = numberOfDigits;
  while (i < intlNumberMask.length && numberOfDigitsToRemoveLeft > 0) {
    if (intlNumberMask[i] === maskChar) {
      numberOfDigitsToRemoveLeft--;
    }
    i++;
  }
  while (i < intlNumberMask.length && intlNumberMask[i] === ' ') {
    i++;
  }
  return intlNumberMask.substr(i, intlNumberMask.length - i);
}

export function getShortMaskByCountryCode(countryCode) {
  const countryData = getCountryDataByCode(countryCode);
  const numberOfDigitsInPrefix = getNumberOfDigitsInPrefix(countryData.intlNumberPrefix);
  return removeSomeFrontDigitsFromPrefix(numberOfDigitsInPrefix, countryData.intlNumberMask);
}

export function getPrefixByCountryCode(countryCode) {
  return getCountryDataByCode(countryCode).intlNumberPrefix;
}
