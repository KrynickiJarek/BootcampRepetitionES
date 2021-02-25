document.addEventListener("DOMContentLoaded", function() {

    const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

    function fn(element, index, array){
        return element.length;
    }

    console.log(cities.map(fn));
});

// inaczej:
//
// const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
//
// const citiesNamesLength = cities.map(function(city){
//     return city.length;
// })
// console.log(citiesNamesLength);