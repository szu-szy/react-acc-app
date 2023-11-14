## Zad 1

Utworz komponent ProfileList ktory przez propsy otrzymuje liste profili - dzieki jednej z metod tablicowych zostaja wyswietlone elementy listy z komponentem Profile (pamietamy, ze elementy listy musza zawierac tag <li>)

## Zad 5

Zadanie 3
Utworz komponent ProfileForm

- bedzie zawieral formularz ktory bedzie nam pobierac informacje o pojedynczym profilu
- po zatwierdzeniu przyciskiem "Dodaj" powinien on dodac nam element do listy
- lista profili powinna w tym zadaniu zostac przechowywana w stanie (stan utworzony w App.tsx)
- Funkcja ktora dodaje element do tablicy powinna zostac utworzona w App.tsx, nastepnie przekazana przez props do ProfileForm

## Zad 6

Utworz przycisk do usuwania elementu z listy

- znajdowac on sie bedzie na gorze pojedynczego elementu listy (czyli komponent Profile)
- funkcja do usuwania powinna zostac utworzona w App.tsx i przekazana do komponentu Profile List a nastepnie do Profile przez props

## Zad 7

Utworz komponent counter automatyczny który podnosi liczbe o 1 co 1 sekunde
należy uzyc setInterval z uwzględnieniem funkcji czyszczącej clearInterval(intervalID)

## Zad 8

Utworz komponent Timer który posiada 2 przyciski start i stop oraz posiada useEffect Do czyszczenia oraz odpalenia timera po pojawieniu się zegarka na stronie,

- dodatkowo posiada stan isRunning -> gdzie przycisk start jest zablokowany gdy timer jest uruchomiony
- przycisk stop jest zablokowany gdy timer nie jest uruchomiony
- tworzymy timer co sekundę bez podzialu na sekundy/minuty etc

## Zad 9

Stworz custom hook dla komponentu ProfileForm oraz CounterEffect który wydziela całą logike z komponentu (zostaje tylko return)
