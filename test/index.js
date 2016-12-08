import assert from 'assert';
import formatPhoneNumber, { ALPHA_2, getCountryCodeByAlpha2 } from '../src';

const runFormatMergedNumberTest = (inputNumber, expectedResult) => {
  const formattedNumber = formatPhoneNumber(inputNumber);
  assert.equal(formattedNumber, expectedResult);
};

const runFormatSeparatedNumberTest = (inputCountryCode, inputNumber, expectedResult) => {
  const formattedNumber = formatPhoneNumber(inputCountryCode, inputNumber);
  assert.equal(formattedNumber, expectedResult);
};

describe('format Canadian & US number', () => {
  const countryCode = getCountryCodeByAlpha2(ALPHA_2.US);
  const number = '2014567890';
  const expectedResult = `${countryCode} (201) 456-7890`;
  it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
  it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
});

describe('format Belgium number', () => {
  const countryCode = getCountryCodeByAlpha2(ALPHA_2.BE);
  const number = '471234567';
  const expectedResult = `${countryCode} 471 23 45 67`;
  it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
  it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
});

describe('format Korean number', () => {
  const countryCode = getCountryCodeByAlpha2(ALPHA_2.KR);
  const number = '1012345678';
  const expectedResult = `${countryCode} 10-1234-5678`;
  it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
  it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
});

describe('format Ukrainian number', () => {
  const countryCode = getCountryCodeByAlpha2(ALPHA_2.UA);
  const number = '501234567';
  const expectedResult = `${countryCode} (50) 123-45-67`;
  it('merged ', () => runFormatMergedNumberTest(`${countryCode}${number}`, expectedResult));
  it('separated', () => runFormatSeparatedNumberTest(countryCode, number, expectedResult));
});
