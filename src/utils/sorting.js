
export function sortByName(countryLeft, countryRight) {
  if (countryLeft.country > countryRight.country) {
    return 1;
  }
  if (countryLeft.country < countryRight.country) {
    return -1;
  }
  return 0;
}

export function sortByIntlNumberPrefixDesc(countryLeft, countryRight) {
  if (countryLeft.intlNumberPrefix > countryRight.intlNumberPrefix) {
    return -1;
  }
  if (countryLeft.intlNumberPrefix < countryRight.intlNumberPrefix) {
    return 1;
  }
  return 0;
}
