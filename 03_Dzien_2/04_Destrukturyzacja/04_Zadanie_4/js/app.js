document.addEventListener("DOMContentLoaded", function () {

        const arr = [];
        const generateRandomNumbers = () => {
            for (let i = 0; i < 5; i++) {
                arr.push(Math.floor(Math.random() * 5))
            }
        }
        generateRandomNumbers()
        console.log(arr);

        const [num1,,num3] = arr;
        console.log(num1);
        console.log(num3);


    }
);