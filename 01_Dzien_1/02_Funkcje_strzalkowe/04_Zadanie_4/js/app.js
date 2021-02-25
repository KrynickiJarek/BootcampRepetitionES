document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("menu");


    const App = function () {
        this.websites = ["google", "twitter", "facebook"];
        this.links = [];
    };

    App.prototype.generateLinks = function () {
        this.websites.forEach(el => {
            this.links.push(`www.${el}.com`)
        })
    };

    App.prototype.insertLinks = function () {
        this.links.forEach(el => {
                const li = document.createElement("li")
                li.innerHTML = `<a href=${el}>${el}</a>`
                menu.appendChild(li);
            }
        )
    };

    const app = new App();
    app.generateLinks();
    app.insertLinks();

    console.log(app.links);


});