![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


## Zadanie 1

Stwórz funkcję (Arrow function) o nazwie ```getNumbers```, która przyjmuje jako parametr tablicę z liczbami. Następnie mnoży każdy element tablicy przez dwa i zwraca wynik.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```).


## Zadanie 2

Stwórz funkcję o nazwie ```Weather```, która będzie konstruktorem.  Stwórz obiekt na bazie tego konstruktora, któremu przekaż tablicę z 3 pomiarami temperatury w ciągu dnia. Rozszerz konstruktor ```Weather``` o metodę ```getAvgTemperature``` (dodaj ją do prototypu), której celem jest zwrócenie średniej temperatury dnia. Wstaw tą wartość do elementu o id ```avg-temp```.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```).

Przykładowe wywołania:

```JavaScript

const day1 = new Weather([-2, 4.4, 3]);

console.log( day1.getAvgTemperature());

```

