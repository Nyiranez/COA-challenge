function containsSubArraySummingToTarget(target, arr) {
    let subArrLeft = 0;
    let subArrRight = subArrLeft + 1;
    let sum = arr[subArrLeft];
    let found = false;

    while (subArrRight < arr.length) {
        if (sum === target) {
            found = true;
            break;
        } else if (sum < target) {
            sum += arr[subArrRight];
            subArrRight++;
        } else {
            sum -= arr[subArrLeft];
            subArrLeft++;
        }
    }

    return found;
}

// Test the containsSubArraySummingToTarget function

let inputArr = [10, 5, 7, 4, 2, 7, 1, 9, 5];
let target = 14;
console.log(containsSubArraySummingToTarget(target, inputArr));