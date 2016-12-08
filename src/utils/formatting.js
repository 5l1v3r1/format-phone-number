import { addMask } from 'mask-parser';
import { sortByCountryCodeDesc } from './sorting';
import { countriesPhoneData } from '../data';

/**
 * It is not guarantee that one country code correspond one country.
 */
function getAllCountriesDataByCountryCode(countryCode) {
  const countriesData = [];
  countriesPhoneData.forEach((countryData) => {
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
  const sortedCountries = countriesPhoneData.sort(sortByCountryCodeDesc);
  let countryIndex = 0;
  while (sortedCountries.length > countryIndex) {
    const countryData = sortedCountries[countryIndex];
    const countryCode = countryData.countryCode;
    const countryCodeLength = countryCode.length;
    if (phoneNumber.substr(0, countryCodeLength) === countryCode) {
      return countryData;
    }
    countryIndex += 1;
  }
  return undefined;
}

function getFormattedPhoneNumberFull(phoneNumber) {
  const countryData = getCountryDataByPhoneNumber(phoneNumber);
  if (countryData === undefined) {
    return phoneNumber;
  }
  const phoneNumberWithputPlus = getPhoneNumberWithoutPlus(phoneNumber);
  return addMask(phoneNumberWithputPlus, countryData.mask);
}

function getFormattedPhoneNumberWithCode(countryCode, phoneNumber) {
  const countryData = getCountryDataByCountryCodeFirst(countryCode);
  if (countryData === undefined) {
    return phoneNumber;
  }
  const phoneNumberWithputPlus = getPhoneNumberWithoutPlus(`${countryCode}${phoneNumber}`);
  return addMask(phoneNumberWithputPlus, countryData.mask);
}

export default (...props) => {
  if (props.length === 1) {
    return getFormattedPhoneNumberFull(props[0]);
  }
  return getFormattedPhoneNumberWithCode(...props);
};
