import MASK_CHAR from '../constants/mask-char';

const PHONE_NUMBER_LENGTH_MIN = 4;
const PHONE_NUMBER_LENGTH_MAX = 15;

function getCountryCodeMask(countryCodeLength) {
  let countryCodeMask = '+';
  for (let i = 0; i < countryCodeLength - 1; i += 1) {
    countryCodeMask += MASK_CHAR;
  }
  return countryCodeMask;
}

function getPhoneNoCountryCodeMask(phoneNoCountryCodeMaxLength) {
  const countryCodeMasks = [];
  let countryCodeMask = '';
  for (let i = 0; i < PHONE_NUMBER_LENGTH_MIN - 1; i += 1) {
    countryCodeMask += MASK_CHAR;
  }
  for (let i = PHONE_NUMBER_LENGTH_MIN - 1; i < phoneNoCountryCodeMaxLength; i += 1) {
    countryCodeMask += MASK_CHAR;
    countryCodeMasks.push(countryCodeMask);
  }
  return countryCodeMasks;
}

export default (countryCode) => {
  const countryCodeLength = countryCode.length;
  const countryCodeMask = getCountryCodeMask(countryCodeLength);
  const phoneNoCountryCodeLength = PHONE_NUMBER_LENGTH_MAX - (countryCodeLength - 1);
  const phoneNoCountryCodeMasks = getPhoneNoCountryCodeMask(phoneNoCountryCodeLength);
  return phoneNoCountryCodeMasks.map(phoneNoCountryCodeMask => (
    `${countryCodeMask} ${phoneNoCountryCodeMask}`
  ));
};
