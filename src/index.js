import * as COUNTRY_CODES from './constants/country-codes';
import {
  getAllPhoneData,
  getFullMaskByCountryCode,
  getShortMaskByCountryCode,
  getPrefixByCountryCode,
} from './utils/api';
import {
  getFormattedPhoneNumberFull,
  getFormattedPhoneNumberWithCode,
} from './utils/formatting';

export {
  COUNTRY_CODES,
  getAllPhoneData,
  getFormattedPhoneNumberFull,
  getFormattedPhoneNumberWithCode,
  getFullMaskByCountryCode,
  getShortMaskByCountryCode,
  getPrefixByCountryCode,
};
