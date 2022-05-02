function anni(maleName, femaleName, year) {
  let result =
    maleName +
    " & " +
    femaleName +
    " are in loved for " +
    year(2020) +
    " years.";
  console.log(result);
}
anni("male", "female", function (anniyear) {
  return 2022 - anniyear;
});
