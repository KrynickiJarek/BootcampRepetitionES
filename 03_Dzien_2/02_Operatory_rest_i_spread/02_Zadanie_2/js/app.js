document.addEventListener("DOMContentLoaded", function () {

    const getAverage = function (...arr) {
        let sum = 0
        let avrg = 0
        arr.forEach(e => {
            sum += e
        })
        avrg = sum/arr.length;
        console.log(avrg);
        return avrg;


    }
    getAverage(1,1,2,2,3,3);
});