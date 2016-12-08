
export function sortByNameDesc(countryDataLeft, countryDataRight) {
  if (countryDataLeft.alpha2 > countryDataRight.alpha2) {
    return 1;
  }
  if (countryDataLeft.alpha2 < countryDataRight.alpha2) {
    return -1;
  }
  return 0;
}

export function sortByCountryCodeDesc(countryDataLeft, countryDataRight) {
  if (countryDataLeft.countryCode > countryDataRight.countryCode) {
    return -1;
  }
  if (countryDataLeft.countryCode < countryDataRight.countryCode) {
    return 1;
  }
  return 0;
}
