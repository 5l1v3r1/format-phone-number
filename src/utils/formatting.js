import { addMask } from 'mask-parser';
import getE123Masks from './e-123-masks';
import { sortByCountryCodeDesc } from './sorting';
import COUNTRY_DATA from '../data';

export function removeNonDigitAndNonPlusChars(number) {
  return number.replace(/[^0-9+]|(?!^)\+/g, '');
}

/**
 * It is not guarantee that one country code correspond one country.
 */
function getAllCountriesDataByCountryCode(countryCode) {
  const countriesData = [];
  COUNTRY_DATA.forEach((countryData) => {
    if (countryData.countryCode === countryCode) {
      countriesData.push(countryData);
    }
  });
  return countriesData;
}

function getCountryDataByCountryCodeFirst(countryCode) {
  const countriesData = getAllCountriesDataByCountryCode(countryCode);
  return countriesData[0];
}

function getValueWithoutFirstPlus(phoneNumber) {
  if (phoneNumber[0] === '+') {
    return phoneNumber.substring(1);
  }
  return phoneNumber;
}

/**
 * It is not guarantee that one country code correspond one country. First one will be selected.
 */
function getCountryDataByPhoneNumber(phoneNumber) {
  // NOTE: do not mutate the original array
  const sortedCountries = [...COUNTRY_DATA].sort(sortByCountryCodeDesc);
  let countryIndex = 0;
  while (sortedCountries.length > countryIndex) {
    const countryData = sortedCountries[countryIndex];
    const { countryCode } = countryData;
    const countryCodeLength = countryCode.length;
    if (phoneNumber.substr(0, countryCodeLength) === countryCode) {
      return countryData;
    }
    countryIndex += 1;
  }
  return undefined;
}

function getBestMasked(phoneNumber, masks) {
  const phoneNumberLength = phoneNumber.length;
  // get mask with phone number length or first possible
  const bestMask = masks.find(mask => (
    getValueWithoutFirstPlus(mask).replace(/ /gi, '').length === phoneNumberLength
  )) || masks[0];
  return addMask(phoneNumber, bestMask);
}

function getFormattedPhoneNumberFull(phoneNumber) {
  const phoneNumberUnformatted = removeNonDigitAndNonPlusChars(phoneNumber);
  const countryData = getCountryDataByPhoneNumber(phoneNumberUnformatted);
  if (countryData === undefined) {
    return phoneNumberUnformatted;
  }
  const phoneNumberWithoutPlus = getValueWithoutFirstPlus(phoneNumberUnformatted);
  return getBestMasked(
    phoneNumberWithoutPlus,
    countryData.masks || getE123Masks(countryData.countryCode),
  );
}

function getFormattedPhoneNumberWithCode(countryCode, phoneNumber) {
  const countryCodeUnformatted = removeNonDigitAndNonPlusChars(countryCode);
  const phoneNumberUnformatted = removeNonDigitAndNonPlusChars(phoneNumber);
  const countryData = getCountryDataByCountryCodeFirst(countryCodeUnformatted);
  if (countryData === undefined) {
    return phoneNumberUnformatted;
  }
  const phoneNumberWithoutPlus = getValueWithoutFirstPlus(`${countryCodeUnformatted}${phoneNumberUnformatted}`);
  return getBestMasked(
    phoneNumberWithoutPlus,
    countryData.masks || getE123Masks(countryData.countryCode),
  );
}

export default (...props) => {
  if (props.length === 1) {
    return getFormattedPhoneNumberFull(props[0]);
  }
  return getFormattedPhoneNumberWithCode(...props);
};
