import * as ALPHA_2 from './constants/alpha-2';
import {
  getAllData,
  getFullMasksByAlpha2,
  getShortMasksByAlpha2,
  getCountryCodeByAlpha2,
} from './utils/api';
import formatPhoneNumber from './utils/formatting';

export {
  ALPHA_2,
  getAllData,
  getFullMasksByAlpha2,
  getShortMasksByAlpha2,
  getCountryCodeByAlpha2,
};

export default formatPhoneNumber;
