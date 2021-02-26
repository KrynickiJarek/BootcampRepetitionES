import {formatDistanceToNow} from "date-fns"
document.addEventListener("DOMContentLoaded", function() {




    const newDate = new Date(2018, 4, 5)
    console.log(formatDistanceToNow(newDate));



});