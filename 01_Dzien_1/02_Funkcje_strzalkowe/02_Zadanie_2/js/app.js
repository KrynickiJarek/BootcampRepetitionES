document.addEventListener("DOMContentLoaded", function() {

    const getSecondMaxNumber = array=>{
        // array.sort((a,b)=>a-b)
        // return array[array.length-2]
        array.sort((a,b)=>b-a)
        return array[1]
    }

    const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
    console.log(getSecondMaxNumber(arr1));
});