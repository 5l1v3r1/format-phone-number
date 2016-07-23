import { getFormattedPhoneNumberFull, getFormattedPhoneNumberWithCode } from 'intl-pn-formats';

const phoneNumber = '+380501234567';
console.log('Original phone number', phoneNumber);
const formattedValue1 = getFormattedPhoneNumberFull(phoneNumber);
console.log('Masked phone number', formattedValue1);

const countryCode = '+380';
const phoneNumberWithoutCountryCode = '501234567';
console.log('Original phone number', phoneNumber);
const formattedValue2 = getFormattedPhoneNumberWithCode(countryCode, phoneNumberWithoutCountryCode);
console.log('Masked phone number', formattedValue2);
