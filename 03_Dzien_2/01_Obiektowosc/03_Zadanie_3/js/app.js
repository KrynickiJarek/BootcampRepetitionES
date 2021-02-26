document.addEventListener("DOMContentLoaded", function () {

    const foods = [];

    class Food {
        constructor(name, protein, carbs, fat) {
            this.name = name;
            this.protein = protein;
            this.carbs = carbs;
            this.fat = fat;
        }

        calculateCalories(protein, carbs, fat) {
            this.calories = protein * 4 + carbs * 4 + fat * 9;
        }

        print() {
            console.log(`
          Type: ${this.constructor.name}    
          Name: ${this.name}                
          Proteins: ${this.proteins}
          Carbs: ${this.carbs}
          Fat: ${this.fat}
        `);
        }
    }

    class FastFood extends Food {
    }

    class FatFreeFood extends Food {
    }

    const ul = document.getElementById("products")

    const form = document.querySelector("form")
    const inputName = document.getElementById("name")
    const inputProteins = document.getElementById("proteins")
    const inputFat = document.getElementById("fat")
    const inputCarbs = document.getElementById("carbs")

    form.addEventListener("submit", e => {
        e.preventDefault()
        const li = document.createElement("li")
        li.innerText = `${inputName.value} - B/T/W - ${inputProteins.value}/${inputFat.value}/${inputCarbs.value}`
        ul.appendChild(li)
        let energy = (inputProteins.value * 4 + inputCarbs.value * 4 + inputFat.value * 9)
        if (energy > 250) {
            const newProduct = new FastFood(inputName.value, inputProteins.value, inputCarbs.value, inputFat.value)
            foods.push(newProduct);

        } else {
            const newProduct = new FatFreeFood(inputName.value, inputProteins.value, inputCarbs.value, inputFat.value)
            foods.push(newProduct);
        }
        console.log(foods);
        form.reset();


    })

});