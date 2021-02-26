document.addEventListener("DOMContentLoaded", function() {

    const button = {
        text: "Send message",
        id: "sendMsg",
        classes: ["btn", "btn-primary"],
        width: 200,
        padding: 20
    };

    console.log(
        `To jest button.
Jego szerokość to ${button.width} px
Napis, który na nim widnieje to "${button.text}".`);

    const buttonContainer = document.getElementById("buttonContainer")

    const myButton = document.createElement("button")
    myButton.style.width = `${button.width}px`
    myButton.style.padding = `${button.padding}px`
    myButton.classList.add(...button.classes)
    myButton.id = button.id
    myButton.innerText = button.text

    buttonContainer.appendChild(myButton)


});