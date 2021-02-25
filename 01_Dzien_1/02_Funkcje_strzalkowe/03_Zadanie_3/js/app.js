
let counter =0;
const runInterval = (n = 5) => {
    if (n < 1 || n > 10 || n % 1 !== 0) {
        console.log("invalied input");
    } else {
        let intervalHello = setInterval(() => {
            console.log("Hello");
            counter++;
            if (n <= counter) {
                clearInterval(intervalHello);
            }
        }, 500);

    }
}

runInterval();


