import assert from 'assert';
import intlPnFormats from '../src';

const runFormatMergedNumberTest = (inputNumber, expectedResult) => {
  const formattedNumber = intlPnFormats.getFormattedPhoneNumberFull(inputNumber);
  assert.equal(formattedNumber, expectedResult);
};

const runFormatSeparatedNumberTest = (inputCountryCode, inputNumber, expectedResult) => {
  const formattedNumber = intlPnFormats.getFormattedPhoneNumberWithCode(inputCountryCode, inputNumber);
  assert.equal(formattedNumber, expectedResult);
};

describe('Format Ukrainian number', function() {
  const expectedResult = '+380 (50) 123-45-67';
  it('merged ', () => runFormatMergedNumberTest('+380501234567',expectedResult));
  it('separated', () => runFormatSeparatedNumberTest('+380', '501234567', expectedResult));
});
