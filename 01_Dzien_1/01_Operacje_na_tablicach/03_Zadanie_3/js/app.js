document.addEventListener("DOMContentLoaded", function() {

    const years = [1995, 1856, 2014, 1987];


    const whatAge = years.map(function (element){
        return 2021 - element;
    })

    console.log(whatAge);

});