import { addMask } from 'mask-parser';
import { countriesPhoneData } from './country-phone-data';
import { sortByIntlNumberPrefixDesc } from './sorting';

/**
 * It is not guarantee that one country code correspond one country.
 */
function getAllCountriesDataByIntlNumberPrefix(intlNumberPrefix) {
  const countriesData = [];
  countriesPhoneData.forEach((countryData) => {
    if (countryData.intlNumberPrefix === intlNumberPrefix) {
      countriesData.push(countryData);
    }
  });
  return countriesData;
}

function getCountryDataByIntlNumberPrefixFirst(intlNumberPrefix) {
  const countriesData = getAllCountriesDataByIntlNumberPrefix(intlNumberPrefix);
  return countriesData[0];
}

function getPhoneNumberWithoutPlus(phoneNumber) {
  if (phoneNumber[0] === '+') {
    return phoneNumber.substring(1);
  }
  return phoneNumber;
}

/**
 * It is not guarantee that one country code correspond one country. First one will be selected.
 */
function getCountryDataByPhoneNumber(phoneNumber) {
  const sortedCountries = countriesPhoneData.sort(sortByIntlNumberPrefixDesc);
  let countryIndex = 0;
  while (sortedCountries.length > countryIndex) {
    const countryData = sortedCountries[countryIndex];
    const countryCode = countryData.intlNumberPrefix;
    const countryCodeLength = countryCode.length;
    if (phoneNumber.substr(0, countryCodeLength) === countryCode) {
      return countryData;
    }
    countryIndex += 1;
  }
  return undefined;
}

export function getFormattedPhoneNumberFull(phoneNumber) {
  const countryData = getCountryDataByPhoneNumber(phoneNumber);
  if (countryData === undefined) {
    return phoneNumber;
  }
  const phoneNumberWithputPlus = getPhoneNumberWithoutPlus(phoneNumber);
  return addMask(phoneNumberWithputPlus, countryData.intlNumberMask);
}

export function getFormattedPhoneNumberWithCode(intlNumberPrefix, phoneNumber) {
  const countryData = getCountryDataByIntlNumberPrefixFirst(intlNumberPrefix);
  if (countryData === undefined) {
    return phoneNumber;
  }
  const phoneNumberWithputPlus = getPhoneNumberWithoutPlus(`${intlNumberPrefix}${phoneNumber}`);
  return addMask(phoneNumberWithputPlus, countryData.intlNumberMask);
}
