document.addEventListener("DOMContentLoaded", function () {

    const quote = document.getElementById("quote")

    const printQuote = (myQuote) => {
        quote.innerText = `${myQuote}`
    }

    printQuote(`"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`)
});