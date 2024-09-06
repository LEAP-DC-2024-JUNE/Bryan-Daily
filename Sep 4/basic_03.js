arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeNames = (arr) => {
  return arr.map(
    (element) => element[0].toUpperCase() + element.slice(1).toLowerCase()
  );
};

console.log(capitalizeNames(arr));
