const assert = require('assert');
const intlPnFormats = require('../');

describe('Masked full phone number', function() {
  it('Should return +380 (50) 123-45-67', function() {
    const phoneNumber = '+380501234567';
    const formattedValue1 = intlPnFormats.getFormattedPhoneNumberFull(phoneNumber);
    assert.equal(formattedValue1, '+380 (50) 123-45-67');
  });
});

describe('Masked phone number with country code', function() {
  it('Should return +380 (50) 123-45-67', function() {
    const countryCode = '+380';
    const phoneNumberWithoutCountryCode = '501234567';
    const formattedValue2 = intlPnFormats.getFormattedPhoneNumberWithCode(
      countryCode,
      phoneNumberWithoutCountryCode
    );
    assert.equal(formattedValue2, '+380 (50) 123-45-67');
  });
});
