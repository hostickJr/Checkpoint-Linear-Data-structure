//*1*
// solution number 1 with array:

function findSum(set1, set2) {
    let sum = 0;
    for (let i of set1) {
        if (!set2.includes(i)) {
            sum += i;
        }
    }
    for (let i of set2) {
        if (!set1.includes(i)) {
            sum += i;
        }
    }
    return sum;
}

//solution number 2 with hashtable:

function findSum(set1, set2) {
    let sum = 0;
    let elements = {};
    for (let i of set1) {
        elements[i] = 1;
    }
    for (let i of set2) {
        if (i in elements) {
            elements[i] += 1;
        } else {
            elements[i] = 1;
        }
    }
    for (let key in elements) {
        if (elements[key] == 1) {
            sum += key;
        }
    }
    return sum;
}

//*2*
//solution number 1 with array:

function findSumOverlap(set1, set2) {
    let sum = 0;
    for (let i of set1) {
        if (set2.includes(i)) {
            sum += i;
        }
    }
    return sum;
}

//solution number 2 using hashtable :

function findSumOverlap(set1, set2) {
    let sum = 0;
    let elements = {};
    for (let i of set1) {
        elements[i] = 1;
    }
    for (let i of set2) {
        if (i in elements) {
            sum += i;
        }
    }
    return sum;
}
