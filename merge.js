function merge(arr1, arr2){
    let sorted = [];
    let idx1 = 0;
    let idx2 = 0;

    let end = arr1.length <= arr2.length ? arr2.length : arr1.length;

    while ((arr1.length <= arr2.length ? idx2 : idx1) < end){
        let num1 = arr1[idx1];
        let num2 = arr2[idx2];

        if (num1 !== undefined && num2 !== undefined){
            if (num1 <= num2){
                sorted.push(num1);
                idx1 += 1;
            } else {
                sorted.push(num2);
                idx2 += 1;
            }
        } else if (num1 === undefined && num2 !== undefined){
            sorted.push(num2);
            idx2 += 1;
        } else {
            sorted.push(num1);
            idx1 += 1;
        }
    }
    return sorted;
}

function mergeSort() {
}

module.exports = {merge, mergeSort};