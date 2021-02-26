document.addEventListener("DOMContentLoaded", function () {

    const showAnimal = ({name, catAge,getVoice}) => {
        console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}`);

    }


    const cat = {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    };
    showAnimal(cat)

});