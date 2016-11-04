# intl-pn-formats

[![Build Status](https://travis-ci.org/opensource-cards/intl-pn-formats.svg?branch=master)](https://travis-ci.org/opensource-cards/intl-pn-formats)
[![npm package](https://badge.fury.io/js/intl-pn-formats.svg)](https://www.npmjs.org/package/intl-pn-formats)
[![Dependency Status](https://david-dm.org/opensource-cards/intl-pn-formats.svg)](https://david-dm.org/opensource-cards/intl-pn-formats)
[![devDependency Status](https://david-dm.org/opensource-cards/intl-pn-formats/dev-status.svg)](https://david-dm.org/opensource-cards/intl-pn-formats#info=devDependencies)

International phone number formats.

### Installation

Using [npm](https://www.npmjs.com/):

```
npm install intl-pn-formats --save
```

### The Gist

```javascript
import {
  getFormattedPhoneNumberFull,
  getFormattedPhoneNumberWithCode,
} from 'intl-pn-formats';

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

* Main ([source](https://github.com/opensource-cards/intl-pn-formats/tree/master/examples/main))

### License

MIT
