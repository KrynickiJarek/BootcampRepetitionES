![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz funkcyjny komponent `CurrencyConverter`, który przyjmuje przez `props`:

- sygnaturę waluty bazowej `from`
- sygnaturę waluty kwotowanej `to`
- kwotę `value`
- przelicznik `rate`

Komponent ma zwracać taką przykładową strukturę HTML:

```html
<div>
  <strong>200.00</strong> EUR => <strong>224.55</strong> USD
</div>
```

dla wywołania:

```js
<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
```

Stwórz również komponent `App`, który będzie renderował **trzy komponenty** `CurrencyConverter`, przekazując różne wartości w `props`.


## Zadanie 2

W pliku do zadania znajduje się komponent `Header` wyświetlający nagłówek strony internetowej.

Jest on napisany w sposób klasowy. Przepisz go oraz komponent `App` na działające **funkcje**.


## Zadanie 3

Stwórz komponent `AddNumbers` służący do dodawania dwóch liczb. Ma on przyjmować w `props`: `numberA`, `numberB` i renderować element `h1` z sumą tych dwóch liczb.

Stwórz również komponent `App`, który będzie renderował komponent `AddNumber` przekazując przykładowe wartości w `props`.

Napisz oba te komponenty najpierw jako **funkcję**, a następnie jako **klasy**.

