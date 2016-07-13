import { countriesPhoneData } from './country-phone-data';

function sortByName(countryLeft, countryRight) {
  if (countryLeft.country > countryRight.country) {
    return 1;
  }
  if (countryLeft.country < countryRight.country) {
    return -1;
  }
  return 0;
}

export function getAllPhoneData() {
  return countriesPhoneData.sort(sortByName);
}

function getCountryDataByCode(countryCode) {
  return countriesPhoneData.find(countryData => countryData.country === countryCode);
}

export function getFullMaskByCountryCode(countryCode) {
  return getCountryDataByCode(countryCode).intlNumberMask;
}

export function getShortMaskByCountryCode(countryCode) {
  // TODO: implement
  return getCountryDataByCode(countryCode).intlNumberPrefix;
}

export function getPrefixByCountryCode(countryCode) {
  return getCountryDataByCode(countryCode).intlNumberPrefix;
}
