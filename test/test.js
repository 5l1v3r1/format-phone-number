const assert = require('assert');
const intlPnFormats = require('../');

describe('Masked full phone number', function() {
  it('Format Ukrainian full number', function() {
    const formattedValue = intlPnFormats.getFormattedPhoneNumberFull('+380501234567');
    assert.equal(formattedValue, '+380 (50) 123-45-67');
  });
});

describe('Masked phone number with country code', function() {
  it('Format Ukrainian short number', function() {
    const formattedValue = intlPnFormats.getFormattedPhoneNumberWithCode(
      '+380',
      '501234567'
    );
    assert.equal(formattedValue, '+380 (50) 123-45-67');
  });
});
