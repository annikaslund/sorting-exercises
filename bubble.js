function bubbleSort(arr) {
    let notSorted = true;
    let end = arr.length-1;

    while (notSorted){
        notSorted = false;

        for (let i=0; i < end; i++){
            let num1 = arr[i];
            let num2 = arr[i+1];

            if (num1 > num2){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; // can't use [num1, num2] = [num2, num1] ?
                notSorted = true;
            }
        }

        end -= 1;
    }
    return arr;
}

module.exports = bubbleSort;