document.addEventListener("DOMContentLoaded", function() {

    const fruits = ["banan", "maliny", "jabłka"]
    const vegetables = ["pomidor", "ogórek", "cebula"]
    const mix = [...fruits,...vegetables];
    console.log(mix);

});