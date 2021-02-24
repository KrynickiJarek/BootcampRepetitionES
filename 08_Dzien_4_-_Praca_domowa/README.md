![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


## Zadanie 1

Stwórz komponent o nazwie `RandomNumbers`. Do `props` przyjmuje wartości `min`, `max` i `count`. Generuje on do tablicy tyle liczb pseudolosowych z zakresu `min` i `max`, ile podano w `count`.

Następnie stwórz komponent `RandomNumbersInfo`, który będzie wyświetlał w elemencie `div` informację o zadanym minimum, maksimum i ilości liczb (przez `props` z komponentu `RandomNumbers`).

Ostatnim komponentem będzie `RandomNumbersList`, który ma wyświetlać wszystkie wylosowane liczby w dowolnej formie (lista, po przecinku).

Wyrenderuj `RandomNumbers` w komponencie `App`, podając w atrybutach do props przykładowe dane.


## Zadanie 2

W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku odpowiedniego dla tego zadania za pomocą:

```js

import person from './data/person';

```

Stwórz **komponent funkcyjny** `PersonBox`, a w nim następującą strukturę (postaraj się samemu wymyślić, jakie to elementy, i wybrać podobne style):

![](images/example.png)

Za pomocą React wyrenderuj w elemencie o id ```app``` komponent `PersonBox`, w którym będą się wyświetlały dane tej osoby według struktury podanej powyżej. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.


## Zadanie 3

W pliku `js/data/products.js` znajduje się tablica z produktami. Zaimportuj ją do pliku odpowiedniego dla tego zadania za pomocą:

```js

import products from './data/products';

```

Stwórz **komponent klasowy** `ProductsList`. Komponent ma wyświetlać produkty, jeden pod drugim, uwzględniając: nazwę, cenę, kod produktu i przycisk "Do koszyka".

Struktura wyświetlania tych elementów zależy od Ciebie. **Pamiętaj jednak o prawidłowym wybraniu klucza!**

Lista powinna być generowana za pomocą metody `map()`.

