# Aplikacja służy do oddawania rzeczy potrzebującym.

# Jak zacząć?

# Występuje problem przy rejestracji "Screen-freeze" po naciśnięciu 2 razy, jeszcze nie udało mi się ustalić czemu:( 
jeśli tak się stanie wystarczy włączyć stronę ponownie i wpisać poprawny email i hasło po przym należy przejść do logowania. 
Innym problemem jest błąd w paginacji tzn. jeśli w sekcji np. "organizacje" przejdziemy na stronę 3 i od razu naciśniemy np 
na dział "lokalnie" to w ww. dziale włącza się również strona 3, która nie istnieje i z której nie da się wyjść numerami(ponieważ nie istnieją:P).
Kłopot jest również dodając validację do rejestracji, ponieważ pochodzi ona z firebase'sa :/ wrzuciłem przykładowy kod do folderu Register, ale ciężko jest je połączyć.
Nie mogę też nigdzie znaleźć jak zmienić Scrolllink aby z podstrony służył jako link a z głównej strony jako scroll :( działa tylko pierwsza opcja.
Mimo wszystko myślę, że jak na -drugą WŁASNĄ- aplikację jest całkiem okej:) // pracuję nad problemami!

#Aktualnie implementuję walidację do głównego formularza w dziale "Oddaj rzeczy"!!!

1. Zarejestruj się w dziale "Załóż konto"
2. Zaloguj się w dziale "Zaloguj się"
3. Sprawdź wspierane organizacje, fundacje oraz zbiórki naciskając na wybrany typ w dziale "Fundacje i organizacje" / możesz również sprawdzić statystyki/ kroki działania, dział "O nas" oraz wysłać do mnie maila w poszczególnych działach w menu
4. Po wszystkim naciśnij przycisk "Oddaj rzeczy" aby przejść do głównego formularza
5. W dziale "Oddaj rzeczy" postępuj zgodnie z instrukcją opisaną na żółtym banerze
6. Dział "Zorganizuj zbiórkę" nie jest jeszcze obsługiwany
7. W przypadku jakichkolwiek pytań lub próby kontaktu ze mną wyślij mi mail na adres konra.kdro7@gmail.com , pozdrawiam!

Aktualnie równięz studiuję książkę Typescript-Node-React oraz zaraz po rozpoczynam kurs AWS Docker/ Kubernetes jak i książkę linux-terminal-command oraz linux-zabezpieczenia. 
Po tym czasie planuję dodać (lub najpewniej po prostu napisać nową podobną aplikację) kod Typesciprtowy, backend do rejestracji oraz logowania w node, Redux lub React Context do obłusgi stanu
oraz wdrożenie wszystkiego w chmurze AWS. Część z wyżej ww. potrafiłbym dodać już teraz (Typescript, Context Api może nawet Redux i powoli Jest oraz część Node'a), 
ale zdecydowanie wolę nauczyć się ich najpierw przynajmniej na poziomie regulara -Jakość nie ilość!!-, choć tutaj gonił mnie czas, z tego powodu pojawią się okazyjnie średnie rozwiązania 
(jak klasa fix:P czy importanty). Zapewniam jednak, że nie są one spowodowane brakiem wiedzy  (Działają tak samo jak normalne rozwiązania, problem pojawiałby się tylko przy refaktoryzacji),
starałem się po prostu nie wrzucać 4000 commitów do aplikacji poglądowej, gdyż pierwszej pracy szukałbym pare lat w takim wypadku:P  

# Teraz pracuję nad validacją formularzy