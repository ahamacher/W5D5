class Clock {
    constructor() {
        console.log("we made something");
        this.hour = new Date().getHours();
        this.minute = new Date().getMinutes();
        this.second = new Date().getSeconds();
        this.printTime();
        setInterval (this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(this.hour.toString() + ":" + this.minute.toString() + ":" + this.second.toString());
    }

    _tick() {
        this.second++;
        if (this.second > 59) {
            this.second = 0;
            this.minute++;
            if (this.minute > 59) {
                this.minute = 0;
                this.hour++;
                if (this.hour > 24) {
                    this.hour = 0;
                }
            }
        }
        this.printTime();
    }
}

// let clock = new Clock();
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const addNumbers = function(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("What\'s your number?", (num) => {
           let saveNum = parseInt(num);
           sum += saveNum;
           completionCallback(sum);
           numsLeft--;
           addNumbers(sum, numsLeft, completionCallback);
        });
    } else if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
        return;
    }
};


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


const absurdBubbleSort = function(arr, sortCompletionCallback) {
    const outerBubbleSortLoop = function(madeAnySwaps) {
        if (madeAnySwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    };
    outerBubbleSortLoop(true);
};

const askIfGreaterThan = function(el1, el2, callback) {
    reader.question(`${el1} > ${el2}?`, (compare) => {
        let str = compare;
        if (str === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    });
};

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    } else {
        outerBubbleSortLoop(madeAnySwaps);
    }
};



absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

