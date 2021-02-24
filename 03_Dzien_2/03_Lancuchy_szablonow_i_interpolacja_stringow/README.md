![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


## Zadanie 1 - rozwiązywane z wykładowcą




Stwórz funkcję ```whoAreYou()```, której celem będzie **zwrócenie**  stringa (przykład niżej), na podstawie przekazanego do niej obiektu ```person```.


```js
const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  profession: "Lord of Wallachia"
};

whoAreYou(person);
```

```HTML
My name is Vlad Drăculea.
I am 586 years old.
My proffesion is Lord of Wallachia.
```


## Zadanie 2




Stwórz dwie zmienne, które będą przechowywały dowolne liczby. Następnie wypisz ich sumę w konsoli korzystając z łańcucha szablonowego (Template strings).

Przykład:

```plain
Suma dwóch liczb 2 i 4 to: 6
```


## Zadanie 3




Wstaw do zmiennej swoje imię. Następnie wypisz je w konsoli razem z nazwiskiem. 

Przykład:

```plain
Moje imię i nazwisko to: Chuck Norris
```

## Zadanie 4




Stwórz funkcję, której celem będzie wypisanie w konsoli kilku liniowego tekstu np:

```HTML
"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock
```

Wstaw tekst do elementu `#quote`.


## Zadanie 5




Mając do dyspozycji obiekt button (przykład niżej), wypisz w konsoli następujący tekst:

```plain
To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message".
```

```js
const button = {
  text: "Send message",
  id: "sendMsg",
  classes: ["btn", "btn-primary"],
  width: 100,
  padding: 20
};
```

Na podstawie danych z obiektu stwórz nowy element ```button``` i wstaw go na stronę wewnątrz elementu `#buttonContainer`.

Wykorzystaj obiekt do ustawienia odpowiednich styli i atrybutów.
