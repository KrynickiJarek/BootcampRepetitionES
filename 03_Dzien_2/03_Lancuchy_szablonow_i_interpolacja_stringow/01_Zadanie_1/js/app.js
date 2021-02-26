document.addEventListener("DOMContentLoaded", function() {

    const whoAreYou = (person)=>{
        console.log(`
        My name is ${person.name} ${person.lastName}.
        I am ${2020-person.yearOfBirth} years old.
        My profession is ${person.profession}
        `);
    }

    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        profession: "Lord of Wallachia"
    };

    whoAreYou(person);

});