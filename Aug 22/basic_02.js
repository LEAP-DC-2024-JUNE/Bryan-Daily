const array = [1, 2, 3, 4, 5];

const reverse = (arr) => {
    let new_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        new_arr[new_arr.length] = arr[i];
    }
    return new_arr;
}
console.log(reverse(array));