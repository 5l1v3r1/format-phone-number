
export function sortByCountryNameDesc(countryDataLeft, countryDataRight) {
  if (countryDataLeft.countryName > countryDataRight.countryName) {
    return 1;
  }
  if (countryDataLeft.countryName < countryDataRight.countryName) {
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
