function mean(arr) {
    let sum = 0
    for (let num of arr) sum += Number(num)

    return sum / arr.length;
} 

function median(arr) {
    let mid = Math.floor(arr.length / 2);
    arr.sort((a,b) => a - b);
    if (arr.length % 2 != 0) {
        return arr[mid];
    
    }
    else {
        return (Number(arr[mid]) + Number(arr[mid - 1])) / 2;
    }

}

function mode(arr) {
    let m = new Map();

    for (let num of arr) {
        if (m.has(num)) 
            m.set(num, m.get(num) + 1);
        else 
            m.set(num, 1);
    }

    let theMode = m.keys().next().value;

    for (let [key, val] of m) {
        if (m.get(theMode) < val) {
            theMode = key;
        }
    }
    
    return theMode;
}

module.exports = {mean, median, mode}