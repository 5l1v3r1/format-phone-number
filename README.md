# format-phone-number

[![Build Status](https://travis-ci.org/opensource-cards/format-phone-number.svg?branch=master)](https://travis-ci.org/opensource-cards/format-phone-number)
[![npm package](https://badge.fury.io/js/format-phone-number.svg)](https://www.npmjs.org/package/format-phone-number)
[![Dependency Status](https://david-dm.org/opensource-cards/format-phone-number.svg)](https://david-dm.org/opensource-cards/format-phone-number)
[![devDependency Status](https://david-dm.org/opensource-cards/format-phone-number/dev-status.svg)](https://david-dm.org/opensource-cards/format-phone-number#info=devDependencies)

Make correct combination of phone number parts depending on a country.

### Installation

Using [npm](https://www.npmjs.com/):

```
npm install format-phone-number --save
```

### The Gist

```javascript
import {
  getFormattedPhoneNumberFull,
  getFormattedPhoneNumberWithCode,
} from 'format-phone-number';

const phoneNumber = '+380501234567';
// '+380 (50) 123-45-67'
const formattedValue1 = getFormattedPhoneNumberFull(phoneNumber);

const countryCode = '+380';
const phoneNumberWithoutCountryCode = '501234567';
// '+380 (50) 123-45-67'
const formattedValue2 = getFormattedPhoneNumberWithCode(
  countryCode,
  phoneNumberWithoutCountryCode
);
```

### Examples

* Main ([source](https://github.com/opensource-cards/format-phone-number/tree/master/examples/main))

### License

MIT
