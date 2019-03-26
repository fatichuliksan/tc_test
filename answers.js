function sumFibonanciPrime(n) {
    let lastNum = 0;
    let i = 0;
    let fibonacciNum = [];
    let total = 0;

    while (lastNum <= n) {
        //fibbonaci number
        if (i === 0 || i === 1) {
            lastNum = i;
            fibonacciNum.push(lastNum);
            i++;
        } else {
            lastNum = (fibonacciNum[i - 1]) + (fibonacciNum[i - 2]);
            if (lastNum <= n)
                fibonacciNum.push(lastNum);
            i++;
        }

        //prime check
        if (lastNum > 1) {
            let a = 0;
            for (j = 1; j <= lastNum; j++) {
                if (lastNum % j === 0) {
                    a++;
                }
            }
            if (a === 2)
                total += lastNum;
        }
    }
    console.log(total);
    return fibonacciNum;
}

function subarrayCheck(a, b) {
    let lastIndex = null;
    let index;
    let status;
    for (i = 0; i < b.length; i++) {
        index = a.indexOf(b[i]);
        if (lastIndex != null) {
            if (lastIndex != index - 1) {
                status = false;
                break;
            } else {
                lastIndex = index;
                if (i === b.length - 1) {
                    status = true;
                }
            }
        } else {
            lastIndex = index;
        }
    }

    console.log(status);
    return status;
}

sumFibonanciPrime(20);

let a = [1, 2, 0, 5, 8, 1, 3];
let b = [1, 2, 5,0, 0];
subarrayCheck(a, b);